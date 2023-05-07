import { Document, Schema, model } from "mongoose";

export interface ITag extends Document {
  text: string;
}



export const Tag = model<ITag>("Tag", TagSchema);