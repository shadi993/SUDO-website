# How to setup

## SUDO Cloudflare Pages

Setup the discord statistics worker:

Requirements:

- An upstash account (free) - https://upstash.com
- A discord bot - https://discord.com/developers
- Wrangler CLI (see below how to install)

Create a **wrangler.toml** file in the _discord-stats_ folder,
and paste in the following (and add the vars):

```bash
name = "discord-stats"
type = "javascript"
compatibility_date = "2024-08-06"

workers_dev = true

[triggers]
crons = ["0 * * * *"]

[vars]
DISCORD_TOKEN = "CHANGE_ME"
DISCORD_GUILD_ID = "CHANGE_ME"
STAFF_MEMBER_ROLES = "CHANGE_ME"
UPSTASH_REDIS_REST_URL = "CHANGE_ME"
UPSTASH_REDIS_REST_TOKEN = "CHANGE_ME"
```

Now you can deploy the worker by following the below instructions.

## Install Wrangler CLI & Deploy the Worker

```bash
npm install -g wrangler
```

Login to cloudflare:

```bash
wrangler login
```

Deploy the worker:

```bash
wrangler publish discord-stats/src/index.js
```

With a bit of luck, the worker is ready to go!

View the worker on your cloudflare Workers & Pages panel, and copy the URL of it.

It looks like: https://discord-stats.myusername.workers.dev

and put that url at the bottom of **src/services/api-service**
