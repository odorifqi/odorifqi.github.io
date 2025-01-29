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
            Product designer and software engineer who thrives on crafting immersive digital app experiences.
            Proficient both in UI/UX design and front-end development to translate design concepts into responsive and interactive apps.
            Collaborative professional with a keen eye for detail and a passion for staying updated with industry trends and technologies
            to deliver exceptional user experiences.
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
