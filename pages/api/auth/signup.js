import { hashPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') return;
  const data = req.body;

  const { email, password } = data;

  const client = await connectToDatabase();

  if (!email || !email.includes('@') || !password || password.trim().length < 6) {
    res.status(422).json({ message: 'Invalid input - psswrod should also be al least 6 characters long.' });
    return;
  }

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;
