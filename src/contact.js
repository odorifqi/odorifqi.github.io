import React from "react";
import s from "./output.css";
import GitHubButton from "react-github-btn";

function ContactList({ title, url }) {
    return url ? (
        <li>
            <a className={ s.contactLink } href={ url } target="_blank">
                { title }
            </a>
        </li>
    ) : (
        <li style={ { color: "white" } }>
            { title }
        </li>
    );
}

export default function Contact() {
    return (
        <ul className={ s.contactList }>
            <ContactList title="odorifqi@gmail.com" />
            <ContactList
                url="https://drive.google.com/drive/folders/1M66ze5sgI_VnTAe6ox6vK_s06lDKnCjD?usp=sharing"
                title="Curriculum Vitae"
            />
            <ContactList url="https://medium.com/@odorifqi" title="Medium" />
            <ContactList url="https://behance.net/odorifqi" title="Behance" />
            <ContactList url="https://dribbble.com/odorifqi" title="Dribbble" />
            <ContactList url="https://linkedin.com/in/odorifqi" title="Linkedin" />
            <li>
                <GitHubButton
                    href="https://github.com/odorifqi"
                    data-size="large"
                    data-text='@odorifqi'
                    title='This is my github account'
                />
            </li>
        </ul>
    );
}
