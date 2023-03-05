import mongoose from 'mongoose';

export interface IUserSchema {
  username: string;
  email: string;
  name: string;
  password: string;
  created_at: Date;
}

const User = new mongoose.Schema<IUserSchema>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUserSchema>('User', User);
