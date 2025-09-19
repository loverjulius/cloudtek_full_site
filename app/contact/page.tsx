'use client';
import { FormEvent } from "react";

export default function ContactPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const company = String(data.get('company') || '').trim();
    const message = String(data.get('message') || '').trim();

    const to = 'hello@cloudtekcomputing.com';
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="section" id="contact">
      <div className="container" style={{maxWidth:720}}>
        <h1>Contact Us</h1>
        <p className="text-muted" style={{marginTop:8}}>Share your goals — we’ll respond within one business day.</p>
        <form onSubmit={onSubmit} style={{display:'grid',gap:'0.6rem',marginTop:12}}>
          <input className="btn" placeholder="Full name" name="name" required />
          <input className="btn" type="email" placeholder="Work email" name="email" required />
          <input className="btn" placeholder="Company / Agency" name="company" />
          <textarea className="btn" placeholder="What problem are you trying to solve?" rows={4} name="message" required />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </main>
  );
}
