import { Document, Schema, model } from "mongoose";

export interface IImage extends Document {
  text: string;
}

// creating schema
const ImageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Image = model<IImage>("Image", ImageSchema);
