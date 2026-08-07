import { User } from "../models/User";

type DiscordUser = {
  id: string;
  username: string;
  global_name: string | null;
  avatar: string | null;
};

export const findOrCreateNewUser = async (discordUser: DiscordUser) => {

  const user = await User.findOne({
    discordId: discordUser.id
  });

  if (user) {
    return user;
  }

  return await User.create({
    discordId: discordUser.id,
    username: discordUser.username,
    globalName: discordUser.global_name,
    avatar: discordUser.avatar ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png` : null
  });
};