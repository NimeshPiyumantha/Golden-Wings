import { Document, Schema, model } from "mongoose";

export interface ITime extends Document {
  timeId: string;
}

// creating schema
const TimeSchema = new Schema(
  {
    timeId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Time = model<ITime>("Time", TimeSchema);
