import React from "react";
import s from "./style.css";

function ContactList({ title, url }) {
  return (
    <li>
      <a className={s.contactLink} href={url} target="_blank">
        {title}
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <section className={s.container}>
      <ul className={s.contactRow}>
        <li style={{ color: "white" }}>odorifqi@gmail.com</li>
        <ContactList
          url="https://github.com/odorifqi/odorifqi.github.io/tree/main/src/CV%20Rifqi"
          title="Curriculum Vitae"
        />
        <ContactList url="https://medium.com/@odorifqi" title="Medium" />
        <ContactList url="https://behance.net/odorifqi" title="Behance" />
        <ContactList url="https://dribbble.com/odorifqi" title="Dribbble" />
        <ContactList url="https://linkedin.com/in/odorifqi" title="Linkedin" />
        <ContactList url="https://instagram.com/odorifqi" title="Instagram" />
        <ContactList url="https://twitter.com/odorifqi" title="Twitter" />
      </ul>
    </section>
  );
}
