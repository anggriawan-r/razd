"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import contactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const email = FormData.get("email");
  const message = FormData.get("message");

  // Simple server-side validation
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email.",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "anggriawan.net@gmail.com",
      subject: "Message from contact form.",
      reply_to: email as string,
      react: React.createElement(contactFormEmail, {
        message: message as string,
        email: email as string,
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
