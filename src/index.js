import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";
import WorkCardList from "./work";
import s from "./output.css";
import logo from "./img-thumb/logo-dark.svg";

console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
    return (
        <div className={ s.mainContainer }>
            <Header />
            <Summary />
            <WorkCardList />
            <Footer />
        </div>
    );
}

function Summary() {
    return (
        <section className={ s.summary }>
            <span>
                Design Engineer who owns the full product loop from Figma prototype to production, eliminating the design-to-engineering handoff entirely.
                Experienced both in UX/UI design and front-end development to translate design concepts into responsive and interactive apps.
                Over 3 years in the banking industry I've designed and shipped enterprise banking applications used by 1,000+ employees
                as the sole owner of the UX/UI design and lead on the frontend development. I build the design system and the React component library it ships against,
                so what's designed is exactly what gets built. No spec drift, no translation loss, faster cycles.
            </span>
        </section >
    );
}

function Header() {
    return (
        <header className={ s.header }>
            <img src={ logo } className={ s.logo } />
            <div className={ s.titleContainer }>
                <h1 className={ s.title }>Rifqi</h1>
                <h1 className={ s.pronounce }>{ `/rēf-kē/` }</h1>
                <h1 className={ s.pronounce }>{ `(he/him)` }</h1>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className={ s.footer }>
            <Contact />
        </footer>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
