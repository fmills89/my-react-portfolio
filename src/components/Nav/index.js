import React from 'react';

function Nav(props) {
    const { currentComp, setCurrentComp } = props;

    return (
        <nav>
            <ul className="flex-row mobile-view">
                <li className={currentComp === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("about")}>About Me</span>
                </li>
                <li className={currentComp === "projects" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("projects")}>Projects</span>
                </li>
                <li className={currentComp === "contact Me" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("contact Me")}>Contact Me</span>
                </li>
                <li className={currentComp === "resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentComp("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;