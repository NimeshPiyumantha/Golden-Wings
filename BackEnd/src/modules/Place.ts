import { Document, Schema, model } from "mongoose";

export interface IPlace extends Document {
  title: string;
  description: string;
  location: string;
  imageId: string;
  imageUrl: string;
  date: Date;
  timeId: string;
  timeRange: string;
  cost: number;
  contact: number;
  tags: string[];
  categoryName: string;
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
    location: {
      type: String,
      required: true,
    },
    imageId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timeId: {
      type: String,
      required: true,
    },
    timeRange: {
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
    categoryName: {
      type: String,
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
