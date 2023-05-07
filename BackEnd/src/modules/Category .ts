import { Document, Schema, model } from "mongoose";

export interface ICategory extends Document {
  categoryName: string;
}

export const Category = model<ICategory>("Category", CategorySchema);