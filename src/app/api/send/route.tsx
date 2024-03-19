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

  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2000); 
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { email, subject, message } = req.body;
  console.log(email, subject, message);

  try {
    
    const fromEmail = process.env.FROM_EMAIL as string;
    const data = await sendEmail({ fromEmail, toEmail: email, subject, message });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
