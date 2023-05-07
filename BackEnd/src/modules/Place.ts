import { Document, Schema, model } from "mongoose";

export interface IPlace extends Document {
  title: string;
  description: string;
  images: string;
  date: Date;
  cost:number;
  contact:number;
  time:string,
  tags: string[];
  categoryId: string;
}


export const Place = model<IPlace>("Place", PlaceSchema);
