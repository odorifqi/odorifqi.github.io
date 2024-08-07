import React from "react";
import s from "./output.css";

function ContactList({ title, url }) {
  return url ? (
    <li>
      <a className={s.contactLink} href={url} target="_blank">
        {title}
      </a>
    </li>
  ) : (
    <li>
      <a style={{ color: "white", fontSize: "1.25rem" }}>{title}</a>
    </li>
  );
}

export default function Contact() {
  return (
    <section className={s.container}>
      <ul className={s.contactRow}>
        <ContactList title="odorifqi@gmail.com" />
        <ContactList
          url="https://drive.google.com/drive/folders/1M66ze5sgI_VnTAe6ox6vK_s06lDKnCjD?usp=sharing"
          title="Curriculum Vitae"
        />
        <ContactList url="https://medium.com/@odorifqi" title="Medium" />
        <ContactList url="https://behance.net/odorifqi" title="Behance" />
        <ContactList url="https://dribbble.com/odorifqi" title="Dribbble" />
        <ContactList url="https://linkedin.com/in/odorifqi" title="Linkedin" />
      </ul>
    </section>
  );
}
