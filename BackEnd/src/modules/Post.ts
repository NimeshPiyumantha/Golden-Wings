export interface IPost extends Document {
  userId: string;
  images: string[];
  date: string;
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
}
