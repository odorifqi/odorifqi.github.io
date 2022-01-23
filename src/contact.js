import React from "react";
import s from "./style.css";

function ContactList({ title, url, handle = "" }) {
  return (
    <li>
      <a className={s.contactLink} href={url} target="_blank">
        <div className={s.linkDiv}>
          {title}
          <span className={s.dotcom}>{handle}</span>
        </div>
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <section className={s.container}>
      <ul>
        <ContactList
          url="mailto:odorifqi@gmail.com"
          title="odorifqi@gmail.com"
        />

        <ContactList
          url="https://medium.com/@odorifqi"
          title="medium"
          handle=".com/@odorifqi"
        />

        <ContactList
          url="https://behance.net/odorifqi"
          title="behance"
          handle=".net/odorifqi"
        />

        <ContactList
          url="https://dribbble.com/odorifqi"
          title="dribbble"
          handle=".com/odorifqi"
        />

        <ContactList
          url="https://linkedin.com/in/odorifqi"
          title="linkedin"
          handle=".com/in/odorifqi"
        />

        <ContactList
          url="https://instagram.com/odorifqi"
          title="instagram"
          handle=".com/odorifqi"
        />

        <ContactList
          url="https://twitter.com/odorifqi"
          title="twitter"
          handle=".com/odorifqi"
        />
      </ul>
    </section>
  );
}
