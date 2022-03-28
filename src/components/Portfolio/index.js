import React from 'react';
import Project from '../Projects';

function Portfolio()  {
    const projects = [ 
        {
            id: 0,
            name: 'MERN Group App Here',
            description: "MERN app description",
            image: 'mern-stack-image.jpg',
            build: 'HTML, CSS, React, Express.js, Apollo, MonogoDB',
            repo: "https://github.com/fmills89",
            live: 'https://github.com/fmills89'
        },
        {
            id: 1,
            name: 'Brew-Me',
            description: 'Brew-Me is a group project that locates local breweries in major cities. I was responsible for incorperating the Mapbox API.',
            image: 'brew-me-image.jpg',
            build: 'HTML, Tailwind CSS, Javascript',
            repo: 'https://github.com/jessebubble/brew-me',
            live: 'https://jessebubble.github.io/brew-me/'
        },
        {
            id: 2,
            name: '',
            description: '',
            image: '',
            build: '',
            repo: '',
            live: '',
        }
    ];


return (
    <section>
        <div className="center">
            <h1 className="page-header">Portfolio</h1>
        </div>
        <div>
            <ul className='flex-row mobile-view'>
                <li className="padding">
                    <Project projects={projects[0]}></Project>
                </li>
                <li className="padding">
                    <Project projects={projects[1]}></Project>
                </li>
            </ul>
        </div>
    </section>
)

}

export default Portfolio;