import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store that in a database or in a file
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData);
    console.log('1', data);
    data.push(newFeedback);
    console.log('2', data);
    fs.writeFile(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    res.status(200).json({ message: 'This works!' });
  }
}
