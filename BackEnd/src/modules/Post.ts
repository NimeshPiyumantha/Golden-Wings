import { Document, Schema } from "mongoose";

export interface IPost extends Document {
  userId: string;
  images: string[];
  date: Date;
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
}

const PostSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
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
});
