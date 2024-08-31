import { Resend } from "resend";
import EventCreatedEmail from "@/emails/create-event";
import WelcomeEmail from "@/emails/welcome";
import ChannelCreatedEmail from "@/emails/create-channel";
import ChannelValidatedEmail from "@/emails/channel-validated";
import PaymentDoneEmail from "@/emails/payment-done";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Email verification",
      html: `<p>Click <a href=${confirmLink}>here</a> to verified your email.</p>`,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Email reset password",
      html: `<p>Click <a href=${resetLink}>here</a> to reset your password.</p>`,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "2FA Token",
      html: `<p>Your token is: ${token}</p>`,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendWelcomeEmail = async (email: string, name: string | null) => {
  try {
    await resend.emails.send({
      from: "Annect <onboarding@resend.dev>",
      to: email,
      subject: "Selamat Datang di Annect! 🚀",
      react: WelcomeEmail({ userFirstname: name }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendEventCreatedEmail = async (
  email: string,
  name: string | null
) => {
  try {
    await resend.emails.send({
      from: "Annect <onboarding@resend.dev>",
      to: email,
      subject: "Event Anda Berhasil Diunggah di Annect! 🎉",
      react: EventCreatedEmail({ userFirstname: name }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendChannelCreatedEmail = async (
  email: string,
  name: string | null
) => {
  try {
    await resend.emails.send({
      from: "Annect <onboarding@resend.dev>",
      to: email,
      subject: "Event Anda Berhasil Diunggah di Annect! 🎉",
      react: ChannelCreatedEmail({ userFirstname: name }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendChannelValidatedEmail = async (
  email: string,
  name: string | null
) => {
  try {
    await resend.emails.send({
      from: "Annect <onboarding@resend.dev>",
      to: email,
      subject: "Event Anda Berhasil Diunggah di Annect! 🎉",
      react: ChannelValidatedEmail({ userFirstname: name }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendPaymentDoneEmail = async (
  email: string,
  name: string | null,
  link_group: string
) => {
  try {
    await resend.emails.send({
      from: "Annect <onboarding@resend.dev>",
      to: email,
      subject: "Event Anda Berhasil Diunggah di Annect! 🎉",
      react: PaymentDoneEmail({ userFirstname: name, linkGroup: link_group }),
    });
  } catch (err) {
    console.log(err);
  }
};
