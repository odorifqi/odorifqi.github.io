import React from "react";
import ReactDOM from "react-dom";
import s from "./style.css";
import GitHubButton from "react-github-btn";
import Contact from "./contact";

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
      <h3 className={s.subTitle}>Hi! Page will be ready shortly.</h3>
    </header>
  );
}

function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.footerText}>
        Run on{" "}
        <a href="https://github.com/odorifqi/odorifqi.github.io">
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
