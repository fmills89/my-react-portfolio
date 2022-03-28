import React from 'react';

function Nav(props) {
    const { currentComp, setCurrentComp } = props;

    return (
        <nav className="nav">
            <ul className="flex-row mobile-view title is-5">
                <li className={currentComp === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("about")}>About Me</span>
                </li>
                <li className={currentComp === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("portfolio")}>Projects</span>
                </li>
                <li className={currentComp === "contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("contact")}>Contact Me</span>
                </li>
                <li className={currentComp === "resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;