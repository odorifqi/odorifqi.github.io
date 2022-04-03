import React from "react";
import ReactDOM from "react-dom";
import GitHubButton from "react-github-btn";
import Contact from "./contact";
import s from "./style.css";

console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Work />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <div className={s.main}>
      <section>
        Indonesia-based with a background in computer science, interested and
        focused on UI/UX design. Prioritizing user experience, I'm designing to
        solve problems efficiently. Looking ahead to a further future, one small
        step at a time. Feel free to check my social portfolio below for my
        recent work, hit my email and be friends, or maybe collaborate! Thanks
        for visiting!
      </section>
    </div>
  );
}

function Work() {
  return (
    <div className={s.main}>
      <section>
        <strong>Latest Works</strong>
        <ul>
          <li>
            <a
              className={s.workLink}
              target="_blank"
              href="https://www.behance.net/gallery/134830501/BAXY-Workout-app-UIUX-Design-Case-Study"
            >
              BAXY (UI/UX Case Study)
            </a>
          </li>
          <li>
            <a
              className={s.workLink}
              target="_blank"
              href="https://medium.com/design-bootcamp/what-is-gestalt-e3dec6733fe3?source=user_profile---------0-------------------------------"
            >
              What is gestalt? (Article in Medium)
            </a>
          </li>
        </ul>
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
