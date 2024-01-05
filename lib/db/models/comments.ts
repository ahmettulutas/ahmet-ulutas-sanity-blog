import mongoose from 'mongoose';

export type Comment = {
  _id: string;
  image: string;
  message: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  relatedSlugs: Array<string>;
  email: string;
};

const { Schema } = mongoose;
const comments = new Schema<Comment>(
  {
    image: { type: String, required: true },
    message: { type: String, required: true },
    name: { type: String, required: true },
    relatedSlugs: { type: [String], required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Comments || mongoose.model('Comments', comments);
