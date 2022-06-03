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
      <section className={s.intro}>
        Indonesia-based with a background in computer science, passionate about
        UX design. Currently on a fantastic journey of exploring and learning
        digital product design. Looking ahead to a further future, one small
        step at a time. Thanks for visiting!
      </section>
    </div>
  );
}

function Work() {
  return (
    <div className={s.main}>
      <section>
        <strong>Latest Works</strong>
        <ul className={s.workList}>
          <li>
            <a
              className={s.workLink}
              target="_blank"
              href="https://bootcamp.uxdesign.cc/case-study-learn-create-mentor-in-workout-app-292d9509a8b9"
            >
              Case study: learn, create, mentor in workout app
            </a>
          </li>
          <li>
            <a
              className={s.workLink}
              target="_blank"
              href="https://bootcamp.uxdesign.cc/titip-shopping-list-for-an-online-marketplace-case-sample-tokopedia-6b418a31e881"
            >
              Case study: “Shopping list” for e-commerce
            </a>
          </li>
          <li>
            <a
              className={s.workLink}
              target="_blank"
              href="https://bootcamp.uxdesign.cc/what-is-gestalt-e3dec6733fe3"
            >
              What is gestalt? (Article)
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
      <h1 className={s.title}>Muhammad Rifqi</h1>
      <h3 className={s.subTitle}>Hi! welcome to my personal page.</h3>
    </header>
  );
}

function Footer() {
  return (
    <footer className={s.footer}>
      <Contact />
      <p className={s.footerText}>
        <span>Run on </span>
        <a
          className={s.contactLink}
          style={{ fontSize: "1rem" }}
          href="https://github.com/odorifqi/odorifqi.github.io"
        >
          Github Pages
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
