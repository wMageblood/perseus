import { Router } from "express";

const router = Router();

import { authenticate } from "../middleware/auth.middleware";

import { discordLogin } from "../controllers/auth.controller";
import { exchangeCodeForToken, getDiscordUser } from "../services/discord.service";
import { findOrCreateNewUser } from "../services/user.services";
import { generateToken } from "../services/jwt.service";

router.get("/me", authenticate, (req, res) => {
  res.json(req.user)
});

router.get("/discord", discordLogin);


router.get("/discord/callback", async (req, res) => {

  const code = req.query.code;

  const tokenData = await exchangeCodeForToken(code as string);

  const discordUser = await getDiscordUser(tokenData.access_token);

  const user = await findOrCreateNewUser(discordUser)

  const token = generateToken(user.id)

  console.log(user)

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  })

  res.redirect("http://localhost:5173/app/dashboard")
});

router.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  });

  res.status(200).json({
    message: "Logged out",
  });
});

export default router;