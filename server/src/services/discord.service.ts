import { env } from "../config/env";

export const getDiscordAuthUrl = () => {

  const discordUrl = new URL("https://discord.com/oauth2/authorize")

  discordUrl.searchParams.set("client_id", env.DISCORD_CLIENT_ID!);
  discordUrl.searchParams.set("redirect_uri", env.DISCORD_REDIRECT_URI!);
  discordUrl.searchParams.set("response_type", "code");
  discordUrl.searchParams.set("scope", "identify");

  return discordUrl.toString();

};

export const exchangeCodeForToken = async (code: string) => {

  const body = new URLSearchParams();

  body.set("client_id", env.DISCORD_CLIENT_ID!);
  body.set("client_secret", env.DISCORD_CLIENT_SECRET!);
  body.set("code", code as string);
  body.set("grant_type", "authorization_code");
  body.set("redirect_uri", env.DISCORD_REDIRECT_URI!);

  const response = await fetch(
    "https://discord.com/api/oauth2/token",
    {
      method: "POST",
      body
    }
  );

  return response.json();

};

export const getDiscordUser = async (accessToken: string) => {

  const response = await fetch(
    "https://discord.com/api/users/@me",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  return response.json();

};