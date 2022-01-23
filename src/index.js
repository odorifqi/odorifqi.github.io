import React from "react";
import ReactDOM from "react-dom";
import s from "./style.css";
import GitHubButton from "react-github-btn";

console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Contact />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Muhammad Rifqi</h1>
      <h3 className={s.subTitle}>Hi!</h3>
    </header>
  );
}

function Contact() {
  return (
    <section className={s.container}>
      <ul>
        <li>
          <a
            className={s.contactLink}
            href="mailto:odorifqi@gmail.com"
            target="_blank"
          >
            <div className={s.linkDiv}>odorifqi@gmail.com</div>
          </a>
        </li>

        <li>
          <a
            className={s.contactLink}
            href="https://medium.com/@jagaxlelap"
            target="_blank"
          >
            <div className={s.linkDiv}>
              medium
              <span className={s.dotcom}>.com/@jagaxlelap</span>
            </div>
          </a>
        </li>

        <li>
          <a
            className={s.contactLink}
            href="https://behance.net/JAGAXLELAP"
            target="_blank"
          >
            <div className={s.linkDiv}>
              behance
              <span className={s.dotcom}>.net/JAGAXLELAP</span>
            </div>
          </a>
        </li>

        <li>
          <a
            className={s.contactLink}
            href="https://dribbble.com/odorifqi"
            target="_blank"
          >
            <div className={s.linkDiv}>
              dribbble
              <span className={s.dotcom}>.com/odorifqi</span>
            </div>
          </a>
        </li>

        <li>
          <a
            className={s.contactLink}
            href="https://linkedin.com/in/odorifqi"
            target="_blank"
          >
            <div className={s.linkDiv}>
              linkedin
              <span className={s.dotcom}>.com/in/odorifqi</span>
            </div>
          </a>
        </li>

        <li>
          <a
            className={s.contactLink}
            href="https://instagram.com/odorifqi"
            target="_blank"
          >
            <div className={s.linkDiv}>
              instagram
              <span className={s.dotcom}>.com/odorifqi</span>
            </div>
          </a>
        </li>

        <li>
          <a
            className={s.contactLink}
            href="https://twitter.com/odorifqi"
            target="_blank"
          >
            <div className={s.linkDiv}>
              twitter
              <span className={s.dotcom}>.com/odorifqi</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className={s.footer}>
      <p>
        Run on{" "}
        <a href="https://github.com/odorifqi/odorifqi.github.io">
          <strong>Github Pages</strong>
        </a>
      </p>
      <GitHubButton
        href="https://github.com/odorifqi"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-size="large"
        aria-label="Follow @odorifqi on GitHub"
      >
        Follow @odorifqi
      </GitHubButton>
    </footer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
