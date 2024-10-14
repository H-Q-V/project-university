import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hoangvinh07092003@gmail.com',
    pass: 'souj sexv hvzt xahv',
  },
});
export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const info = await transporter.sendMail({
    from: '"Project-Job 👻" <hoangvinh07092003@gmail.com>',
    to,
    subject,
    text,
    html,
  });

  console.log('Message sent: %s', info.messageId);
}
