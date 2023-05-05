import { Schema, model } from "mongoose";

export interface IRole extends Document {
  roleType: string;
}

const RoleSchema = new Schema(
  {
    roleType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Role = model<IRole>("Role", RoleSchema);
