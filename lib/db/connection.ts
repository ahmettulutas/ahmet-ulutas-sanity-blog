import mongoose from 'mongoose';
let connection: typeof mongoose;

const connectToMongo = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Connection failed! No mongodb uri has been found');
  }
  const uri = process.env.MONGODB_URI;
  try {
    if (!connection) connection = await mongoose.connect(uri);
    return connection;
  } catch (error) {
    throw new Error(`Connection failed! ${error}`);
  }
};

export default connectToMongo;
