import { Document, Schema, model } from "mongoose";

export interface IPlace extends Document {
  title: string;
  description: string;
  images: string;
  date: Date;
  time: string;
  cost: number;
  contact: number;
  tags: string[];
  categoryId: string;
}

// creating schema
const PlaceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    contact: {
      type: Number,
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
export const Place = model<IPlace>("Place", PlaceSchema);
