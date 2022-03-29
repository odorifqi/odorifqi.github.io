import React from "react";
import ReactDOM from "react-dom";
import s from "./style.css";
import GitHubButton from "react-github-btn";
import Contact from "./contact";

console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <div className={s.main}>
      <section>
        Indonesia-based with a background in computer science, interested and
        focus on UI/UX design. Looking forward to step up the game.
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Hi! I'm Rifqi.</h1>
      <h3 className={s.subTitle}>Welcome to my personal page.</h3>
    </header>
  );
}

function Footer() {
  return (
    <footer className={s.footer}>
      <Contact />
      <p className={s.footerText}>
        Run on{" "}
        <a
          className={s.contactLink}
          href="https://github.com/odorifqi/odorifqi.github.io"
        >
          <strong>Github Pages</strong>
        </a>
      </p>
      <GitHubButton
        href="https://github.com/odorifqi"
        data-size="large"
        aria-label="Follow @odorifqi on GitHub"
      >
        Follow @odorifqi
      </GitHubButton>
    </footer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
