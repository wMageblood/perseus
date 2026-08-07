import "dotenv/config";

export const env = {
  PORT: process.env.PORT,
  ATLAS_URI: process.env.ATLAS_URI,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI: process.env.DISCORD_REDIRECT_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};