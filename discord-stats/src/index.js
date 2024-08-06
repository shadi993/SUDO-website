import { Redis } from "@upstash/redis/cloudflare";

const SERVER_STATISTICS_KEY = "serverStatistics";
const CACHE_EXPIRATION_TIME = 3600; // Worker Cache expiration time in seconds

export default {
  async scheduled(event, env, ctx) {
    await handleEvent(env);
  },

  async fetch(request, env, ctx) {
    const cache = caches.default;
    const cacheUrl = new URL(request.url);

    let response = await cache.match(cacheUrl);
    if (response) {
      response.headers.set("Access-Control-Allow-Origin", "*");
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
        "Access-Control-Allow-Origin": "*",
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
    const staffMemberCount = members.filter((member) =>
      staffMemberRoles.some((staffRoleId) => member.roles.includes(staffRoleId))
    ).length;

    const serverStatistics = {
      serverName,
      memberCount,
      channelCount,
      staffMemberCount,
    };

    console.log("Server Statistics:", serverStatistics);

    // Store the statistics in Redis
    await redis.set(SERVER_STATISTICS_KEY, JSON.stringify(serverStatistics));

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
    const url = `${this.baseURL}/guilds/${guildId}/members?limit=1000`; // Adjust the limit as needed
    const response = await fetch(url, { headers: this.headers });

    if (!response.ok) {
      throw new Error(`Failed to fetch members: ${response.statusText}`);
    }

    return await response.json();
  }
}
