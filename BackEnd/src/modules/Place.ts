import { Document, Schema, model } from "mongoose";

export interface IPlace extends Document {
  title: string;
  description: string;
  imageId: string;
  date: Date;
  timeId: string;
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
    imageId: {
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
