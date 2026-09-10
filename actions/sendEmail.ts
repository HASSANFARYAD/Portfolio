"use server";

import React from "react";
import { headers } from "next/headers";
import { Resend } from "resend";
import { validateEmail, validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

// Sandbox sender by default. Point CONTACT_FROM_EMAIL at a verified domain
// before relying on this in production, or the mail lands in spam.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Contact Form <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "muhammad.hassan93b@gmail.com";

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;

// Per-instance only: serverless spins up several of these, so this throttles
// casual abuse rather than a determined flood. Move to a shared store
// (Upstash, Redis) if that becomes a real concern.
const submissions = new Map<string, number[]>();

const isRateLimited = (key: string) => {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter(
    (at) => now - at < RATE_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT) {
    submissions.set(key, recent);
    return true;
  }

  recent.push(now);
  submissions.set(key, recent);
  return false;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateEmail(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const forwardedFor = headers().get("x-forwarded-for");
  const clientIp = forwardedFor?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(clientIp)) {
    return {
      error: "Too many messages sent. Please try again later.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
