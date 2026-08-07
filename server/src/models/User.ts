import mongoose, { Schema } from "mongoose";

export interface IUser {
  discordId: string;
  username: string;
  globalName?: string | null;
  avatar?: string | null;
};

export interface IAuthenticatedUser extends IUser {
  id: string
};

const userSchema = new Schema(
  {
    discordId: {
      type: String,
      required: true,
      unique: true
    },

    username: {
      type: String,
      required: true,
    },

    globalName: {
      type: String,
      default: null
    },

    avatar: {
      type: String,
      default: null
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);