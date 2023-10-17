import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = JSON.parse(req.body);

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Inbalid input.' });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(process.env.DB_URL);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message filed!' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
