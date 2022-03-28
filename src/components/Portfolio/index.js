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
            name: 'Deep-Thoughts',
            description: 'A social media app where users can create an accout, post their thoughts for others to see, and interact with other users throught their thoughts.',
            image: 'deep-thoughts-image.png',
            build: 'MongoDB, Express.js, React, Node.js',
            repo: 'https://github.com/fmills89/deep-thoughts',
            live: 'https://github.com/fmills89/deep-thoughts',
        },
        {
            id: 3,
            name: 'Note-Taker',
            description: 'An application that can be used to write and save notes. This app uses an Express.js backend and will save and retrieve note date. Deployed on Heroku.',
            image: 'note-taker-image.png',
            build: 'Javascript, CSS, HTML, Node.js, Express.js',
            repo: 'https://github.com/fmills89/express-note-taker',
            live: 'https://ancient-retreat-03510.herokuapp.com/',
        },
        {
            id: 4,
            name: 'Weather-App',
            description: 'An app that will remember your searche cities. It will show current and future conditons for that city.',
            image: 'weather-app-image.png',
            build: 'HTML, CSS, Javascript',
            repo: 'https://github.com/fmills89/weather-app',
            live: 'https://fmills89.github.io/weather-app/',
        },
        {
            id: 5,
            name: 'One-Stop-Shop',
            description: 'An online grocery app where you can shop for groceries! This was a group effort was out first attempt at a full-stack application.',
            image: 'one-stop-shop-demo.gif',
            build: 'Javascript, Node.js, Express.js, MySQL, Heroku',
            repo: 'https://github.com/brenhamp/one-stop-shop',
            live: 'https://group1-one-stop-shop.herokuapp.com/',
        }
    ];


return (
    <section class='has-text-centered'>
        <div className="center">
            <h1 className='content is-medium title is-2 m-2 p-4' >Portfolio</h1>
        </div>
        <div class='columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row'>
            <div class='column'>
                <Project projects={projects[0]}></Project>
            </div>
            <div class='column'>
                <Project projects={projects[1]}></Project>
            </div>    
            <div class='column'>
                <Project projects={projects[2]}></Project>
            </div>
            <div class='column'>
                <Project projects={projects[3]}></Project>
            </div>
            <div class='column'>
                <Project projects={projects[4]}></Project>
            </div>
            <div class='column'>
                <Project projects={projects[5]}></Project>
            </div>
        </div>
    </section>
)

}

export default Portfolio;