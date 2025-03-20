import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/princedb';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cachedConnection: mongoose.Connection | null = null;
let cachedPromise: Promise<typeof mongoose> | null = null;

export const connectToDatabase = async (): Promise<typeof mongoose> => {
  if (cachedConnection && cachedConnection.readyState === 1) {
    console.log('✅ Using cached database connection');
    return mongoose;
  }

  if (!cachedPromise) {
    console.log('🚀 Establishing new database connection...');
    cachedPromise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false, // Avoid memory leaks
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  }

  try {
    const connection = await cachedPromise;
    cachedConnection = connection.connection;
    console.log('✅ Database connected successfully');
    return connection;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    cachedPromise = null;
    throw new Error('Failed to connect to the database');
  }
};
