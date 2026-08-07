import { Request, Response } from "express"
import { getDiscordAuthUrl } from "../services/discord.service";

export const discordLogin = (req: Request, res: Response) => {

  const url = getDiscordAuthUrl();

  res.redirect(url);

};