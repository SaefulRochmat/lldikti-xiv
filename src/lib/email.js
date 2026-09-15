import nodemailer from "nodemailer";

function getTransporter() {
  const required = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Konfigurasi email belum lengkap: ${missing.join(", ")}`);
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

export async function sendReplyEmail({ to, recipientName, originalMessage, reply }) {
  const from = process.env.EMAIL_FROM || process.env.SMTP_USER;
  const transporter = getTransporter();
  const safeReply = escapeHtml(reply);
  const safeOriginalMessage = escapeHtml(originalMessage);

  await transporter.sendMail({
    from,
    to,
    replyTo: from,
    subject: `Re: Pesan Anda untuk LLDIKTI XIV`,
    text: `Yth. ${recipientName},\n\n${reply}\n\n--- Pesan Anda sebelumnya ---\n${originalMessage}\n\nHormat kami,\nLLDIKTI Wilayah XIV`,
    html: `<p>Yth. ${escapeHtml(recipientName)},</p><p>${safeReply.replaceAll("\n", "<br />")}</p><hr /><p><strong>Pesan Anda sebelumnya:</strong></p><p>${safeOriginalMessage.replaceAll("\n", "<br />")}</p><p>Hormat kami,<br />LLDIKTI Wilayah XIV</p>`,
  });
}
