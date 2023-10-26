import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = MongoClient.connect(
    'mongodb+srv://HEEIL:1234@nextjs-course.wovfwnp.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
