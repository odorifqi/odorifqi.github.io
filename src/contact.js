import React from "react";
import s from "./style.css";

function ContactList({ title, url, handle = "" }) {
  return (
    <li>
      <a className={s.contactLink} href={url} target="_blank">
        {/* <div className={s.linkDiv}></div> */}
        {title}
        {/* <span className={s.dotcom}>{handle}</span> */}
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <section className={s.container}>
      {/* <h3 className={s.subTitle}>Let's Collaborate!</h3> */}
      <ul className={s.contactRow}>
        <ContactList
          url="mailto:odorifqi@gmail.com"
          title="odorifqi@gmail.com"
        />

        <ContactList
          url="https://medium.com/@odorifqi"
          title="Medium"
          handle=".com/@odorifqi"
        />

        <ContactList
          url="https://behance.net/odorifqi"
          title="Behance"
          handle=".net/odorifqi"
        />

        <ContactList
          url="https://dribbble.com/odorifqi"
          title="Dribbble"
          handle=".com/odorifqi"
        />

        <ContactList
          url="https://linkedin.com/in/odorifqi"
          title="Linkedin"
          handle=".com/in/odorifqi"
        />

        <ContactList
          url="https://instagram.com/odorifqi"
          title="Instagram"
          handle=".com/odorifqi"
        />

        <ContactList
          url="https://twitter.com/odorifqi"
          title="Twitter"
          handle=".com/odorifqi"
        />
      </ul>
    </section>
  );
}
