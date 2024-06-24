import React from "react";
import ReactDOM from "react-dom";
import GitHubButton from "react-github-btn";
import Contact from "./contact";
import WorkCardList from "./work";
import s from "./output.css";
import logo from "./img-thumb/logo-dark.svg";

console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
  return (
    <div className={s.mainContainer}>
      <Header />
      <Summary />
      <WorkCardList />
      <Footer />
    </div>
  );
}

function Summary() {
  return (
    <section className={s.summary}>
        Product designer and software engineer who thrives on crafting immersive digital app experiences.
        Proficient both in UI/UX design and front-end development to translate design concepts into responsive and interactive apps.
        Collaborative professional with a keen eye for detail and a passion for staying updated with industry trends and technologies
        to deliver exceptional user experiences.
    </section >
  );
}

function Header() {
  return (
    <header className={s.header}>
      <img src={logo} className={s.logo} />
      <h1 className={s.title}>Muhammad Rifqi</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className={s.footer}>
      <Contact />
      <div className={s.githubContainer}>
        <div className={s.footerText}>
          Run on
          <a
            className={s.contactLink}
            href="https://github.com/odorifqi/odorifqi.github.io"
          >
            Github Pages
          </a>
        </div>
        <GitHubButton
          href="https://github.com/odorifqi"
          data-size="large"
          aria-label="Follow @odorifqi on GitHub"
        >
          Follow @odorifqi
        </GitHubButton>
      </div>
    </footer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
