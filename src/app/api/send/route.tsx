import { NextApiRequest, NextApiResponse } from "next";

const sendEmail = async ({ fromEmail, toEmail, subject, message }: {
  fromEmail: string,
  toEmail: string,
  subject: string,
  message: string
}) => {
  console.log("Sending email to:", toEmail);
  console.log("Subject:", subject);
  console.log("Message:", message);

  try {
    
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
    const data = await sendEmail({ fromEmail, toEmail: email, subject, message });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
