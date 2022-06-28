import React from "react";
import ReactDOM from "react-dom";
import GitHubButton from "react-github-btn";
import Contact from "./contact";
import WorkCardList from "./work";
import s from "./style.css";

// import SimpleSlider from "./carousel";
//  <SimpleSlider />

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
        I'm Rifqi, a computer science graduate passionate about UI/UX design. I
        learn design basics such as color, typography, and whitespace. I
        familiarized myself with UI design patterns and UX design processes and
        principles. I enjoy the continuing process of empathizing with users,
        defining their needs, and start to come up with ideas for design
        solutions. I also enjoying front-end web development. Thanks for
        visiting!
      </section>
    </div>
  );
}

function Work() {
  return (
    <div className={s.main}>
      <section>
        <strong>Selected Works</strong>
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
              href="https://www.behance.net/gallery/145149785/Information-System-Student-Management-UIUX-Design"
            >
              UI Design: Information System - Student Management
            </a>
          </li>
          <li>
            <a
              className={s.workLink}
              target="_blank"
              href="https://dribbble.com/shots/18395464-Schedule-an-Event-in-a-Chat-app"
            >
              UI Design: Company website Landing Page
            </a>
          </li>
          <li>
            <a
              className={s.workLink}
              target="_blank"
              href="https://www.behance.net/gallery/145777301/Company-website-UIUX-Design"
            >
              UI Design: Schedule an event in a chat app
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
