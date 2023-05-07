import { Document, Schema, model } from "mongoose";

export interface IPost extends Document {
  userId: string;
  imageId: string;
  date: Date;
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
}

// creating schema
const PostSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    imageId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Post = model<IPost>("Post", PostSchema);
