import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail", // Gmailを使用
      auth: {
        user: process.env.NEXT_PUBLIC_ENV_GMAIL,
        pass: process.env.NEXT_PUBLIC_ENV_GMAIL_PW,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_ENV_TO_MAIL, // 送信先のメールアドレス
      subject: `お問い合わせ from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "メールが送信されました。" });
    } catch (error) {
      console.error("メール送信エラー:", error);
      res.status(500).json({ message: "メール送信に失敗しました。" });
    }
  } else {
    res.status(405).json({ message: "このメソッドは許可されていません。" });
  }
}
