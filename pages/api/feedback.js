import fs from 'fs/promises';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export const extractFeedback = async (filePath) => {
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData);
  return data;
};

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
    const filePath = buildFeedbackPath();
    const data = await extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFile(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = await extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}
