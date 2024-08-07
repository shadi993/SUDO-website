import { Redis } from "@upstash/redis/cloudflare";

const CACHE_VERSION = "v0.0.3";
const SERVER_STATISTICS_KEY = `serverStatistics_${CACHE_VERSION}`;
const CACHE_EXPIRATION_TIME = 3600; // Worker Cache expiration time in seconds
const REDIS_EXPIRE_TIME = 6.048e8; // Redis expiration time in seconds (7 days)
const ROLES_PRIORITY = ["Owner", "supervisor", "Moderator"];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async scheduled(event, env, ctx) {
    await handleEvent(env);
  },

  async fetch(request, env, ctx) {
    const cache = caches.default;
    const cacheUrl = new URL(request.url);
    cacheUrl.searchParams.set("version", CACHE_VERSION); // Add version to cache key

    let response = await cache.match(cacheUrl);
    if (response) {
      return response;
    }

    // If not in the cache, fetch from Redis
    const redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    });

    let serverStatistics = await redis.get(SERVER_STATISTICS_KEY);

    if (!serverStatistics) {
      serverStatistics = await handleEvent(env, redis);
    }

    serverStatistics = JSON.stringify(serverStatistics);

    response = new Response(serverStatistics, {
      status: 200,
      headers: {
        "Cache-Control": `max-age=${CACHE_EXPIRATION_TIME}`,
        ...corsHeaders,
      },
    });

    // Cache the response
    ctx.waitUntil(cache.put(cacheUrl, response.clone()));

    return response;
  },
};

async function handleEvent(env, existingRedis) {
  try {
    const redis =
      existingRedis ||
      new Redis({
        url: env.UPSTASH_REDIS_REST_URL,
        token: env.UPSTASH_REDIS_REST_TOKEN,
      });

    const discordAPI = new DiscordAPI(env.DISCORD_TOKEN);
    const guildId = env.DISCORD_GUILD_ID;
    const staffMemberRoles = env.STAFF_MEMBER_ROLES.split(",");

    if (!guildId) {
      throw new Error("No guild Id was set.");
    }

    const guild = await discordAPI.fetchGuild(guildId);
    const channels = await discordAPI.fetchChannels(guildId);
    const members = await discordAPI.fetchMembers(guildId);

    const serverName = guild.name;
    const memberCount = guild.approximate_member_count;
    const channelCount = channels.length;
    const staffMembers = members.filter((member) =>
      staffMemberRoles.some((staffRoleId) => member.roles.includes(staffRoleId))
    );

    const staffMemberCount = staffMembers.length;

    const roles = guild.roles;
    function fetchRoleName(roleId) {
      const role = roles.find((role) => role.id === roleId);
      return role ? role.name : null;
    }

    function getHighestPriorityRole(member) {
      const memberRoles = member.roles.map((roleId) => fetchRoleName(roleId));
      for (const role of ROLES_PRIORITY) {
        if (memberRoles.includes(role)) {
          return role;
        }
      }
      return null;
    }

    const serverStatistics = {
      serverName,
      memberCount,
      channelCount,
      staffMemberCount,
      staff: staffMembers.map((member) => {
        const staffRole = getHighestPriorityRole(member);
        return {
          displayName: member.user.global_name || member.user.username,
          role: staffRole,
          avatar: `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=1024`,
        };
      }),
    };

    console.log("Server Statistics:", serverStatistics);

    // Store the statistics in Redis
    await redis.set(SERVER_STATISTICS_KEY, JSON.stringify(serverStatistics), {
      ex: REDIS_EXPIRE_TIME,
    });

    // Also store the statistics in the cache with expiration
    return serverStatistics;
  } catch (error) {
    console.error("Error in handleEvent:", error);
  }
}

class DiscordAPI {
  constructor(token) {
    this.token = token;
    this.baseURL = "https://discord.com/api/v10";
    this.headers = {
      Authorization: `Bot ${this.token}`,
      "Content-Type": "application/json",
    };
  }
  async fetchGuild(guildId) {
    const url = `${this.baseURL}/guilds/${guildId}?with_counts=true`;
    const response = await fetch(url, { headers: this.headers });

    if (!response.ok) {
      throw new Error(`Failed to fetch guild data: ${response.statusText}`);
    }

    return await response.json();
  }

  async fetchChannels(guildId) {
    const url = `${this.baseURL}/guilds/${guildId}/channels`;
    const response = await fetch(url, { headers: this.headers });

    if (!response.ok) {
      throw new Error(`Failed to fetch channels: ${response.statusText}`);
    }

    return await response.json();
  }

  async fetchMembers(guildId) {
    let allMembers = [];
    let lastMemberId = null;
    let hasMoreMembers = true;

    while (hasMoreMembers) {
      const url = new URL(`${this.baseURL}/guilds/${guildId}/members`);
      url.searchParams.set("limit", "1000");
      if (lastMemberId) {
        url.searchParams.set("after", lastMemberId);
      }

      const response = await fetch(url.toString(), { headers: this.headers });

      if (!response.ok) {
        throw new Error(`Failed to fetch members: ${response.statusText}`);
      }

      const members = await response.json();
      allMembers = allMembers.concat(members);

      if (members.length < 1000) {
        hasMoreMembers = false;
      } else {
        lastMemberId = members[members.length - 1].user.id;
      }
    }

    return allMembers;
  }
}
