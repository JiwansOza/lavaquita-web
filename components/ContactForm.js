'use client';
import { useState } from 'react';
import { Arrow } from './Icons';

// This form validates input but does not send anything yet.
// To receive messages, POST the data to your own API route or a form service
// (Formspree, Resend, etc.) inside onSubmit where marked below.
export default function ContactForm() {
  const [msg, setMsg] = useState('');
  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    if (!d.name.trim() || !d.message.trim() || !/^\S+@\S+\.\S+$/.test(d.email)) {
      setMsg('Add your name, a valid email and a message, then send again.');
      return;
    }
    // TODO: send `d` to your backend here, then show a real confirmation.
    setMsg('Preview only: this form is not connected to an inbox yet, so nothing was sent.');
  }
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label htmlFor="f-name">Your Name<input id="f-name" name="name" autoComplete="name" required /></label>
      <label htmlFor="f-email">Email Address<input id="f-email" name="email" type="email" autoComplete="email" required /></label>
      <label htmlFor="f-phone">Phone Number<input id="f-phone" name="phone" type="tel" autoComplete="tel" /></label>
      <label htmlFor="f-msg">Message<textarea id="f-msg" name="message" required /></label>
      <button className="btn btn-p" type="submit">Send Message <Arrow /></button>
      {msg && <p className="msg" role="status">{msg}</p>}
    </form>
  );
}
