"use server"

import React from 'react'
import { validateString } from '@/lib/utils'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail, 50)) {
    throw new Error('Invalid email')
  }
  if (!validateString(message, 5000)) {
    throw new Error('Invalid message')
  }

  try {
    await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: "berylijn@gmail.com",
      reply_to: senderEmail as string,
      subject: 'Message from your website',
      text: message as string,
    })
  }
  catch (error) {
    throw new Error('Failed to send email')
  }
}
