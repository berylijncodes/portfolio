"use server"

import React from 'react'
import { validateString, getErrorMessage } from '@/lib/utils'
import { Resend } from 'resend'
import ContactFormEmail from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "berylijn@gmail.com",
      subject: "Message from potfolio website",
      reply_to: senderEmail,
      text: message, // add the text property
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