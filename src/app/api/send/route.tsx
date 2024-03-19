import { NextApiRequest, NextApiResponse } from "next";

interface EmailData {
  fromEmail: string;
  toEmail: string;
  subject: string;
  message: string;
}

const sendEmail = async ({ fromEmail, toEmail, subject, message }: EmailData) => {
  console.log("Sending email to:", toEmail);
  console.log("Subject:", subject);
  console.log("Message:", message);

  try {
    // Simulate sending email asynchronously
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 2000);
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

    const fromEmail = process.env.FROM_EMAIL as string;
    if (!fromEmail) {
      throw new Error("FROM_EMAIL environment variable is not defined");
    }

    const emailData: EmailData = { fromEmail, toEmail: email, subject, message };
    const data = await sendEmail(emailData);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
