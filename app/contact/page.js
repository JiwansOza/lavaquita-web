import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/data';
import { Pin, Phone, Heart } from '@/components/Icons';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="ct">
      <div className="wrap grid">
        <div>
          <h1>Get in <span className="pk">Touch</span></h1>
          <p style={{ marginTop: 10, fontWeight: 600 }}>We&apos;d love to hear from you.</p>
          <ContactForm />
        </div>
        <div className="side">
          <div className="cowbox">
            <img src="/img/cow.jpg" alt="La Vaquita cow mascot holding an ice cream cone" />
            <p className="hand">Let&apos;s<br />Talk<br />Sweet!</p>
          </div>
          <div className="card">
            <ul className="info">
              <li><Pin /><span><b>Visit Us</b>{SITE.street}, {SITE.city}</span></li>
              <li><Phone /><span><b>Call Us</b>{SITE.phone}</span></li>
              <li><Heart /><span><b>Follow Us</b>Instagram · Facebook</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
