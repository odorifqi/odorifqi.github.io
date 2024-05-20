import React from "react";
import ReactDOM from "react-dom";
import GitHubButton from "react-github-btn";
import Contact from "./contact";
import WorkCardList from "./work";
import s from "./style.css";
import logo from "./img-thumb/logo-odo.svg";

console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
  return (
    <div>
      <Header />
      <Main />
      <WorkCardList />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <div className={s.main}>
      <section className={s.intro}>
        Product designer and software engineer who thrives on crafting immersive digital app experiences.
        Proficient both in UI/UX design and front-end development to translate design concepts into responsive and interactive apps.
        Collaborative professional with a keen eye for detail and a passion for staying updated with industry trends and technologies
        to deliver exceptional user experiences.
      </section>
    </div>
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
      <p className={s.footerText}>
        <span>Run on </span>
        <a
          className={s.contactLink}
          style={{fontSize: "1rem"}}
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
