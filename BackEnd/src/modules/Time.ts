import { Document, Schema, model } from "mongoose";

export interface ITime extends Document {
  timeId: string;
}



export const Time = model<ITime>("Time", TimeSchema);
