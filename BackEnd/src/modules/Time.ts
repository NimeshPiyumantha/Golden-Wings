import { Document, Schema, model } from "mongoose";

export interface ITime extends Document {
  timeRange: string;
}

// creating schema
const TimeSchema = new Schema(
  {
    timeRange: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Time = model<ITime>("Time", TimeSchema);
