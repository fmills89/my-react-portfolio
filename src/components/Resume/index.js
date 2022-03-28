import React from 'react';

function Resume() {
    return (
        <div class='columns has-text-centered'>
            <div class='column'>
                <p class='content is-medium'>Resume</p>
                < hr/>

                <a
                    class='button is-primary'
                    href={require('../../assets/files/Forrests-Resume.pdf')}
                    target='_blank' rel='noreferrer'>
                        <span class='icon'>
                            <i class='fas fa-download'></i>
                        </span>
                        <span>Download My Resume</span>
                    </a>
            </div>
            <div class='column'>
                <p class='content is-medium'>Skills</p>
                <hr />
                    <ul>
                        <li>HTML/CSS</li> 
                        <li>MERN Stack</li>
                        <li>Javascript</li>
                        <li>MySql</li>
                        <li>Rest APIs</li>
                        <li>MVC</li>
                        <li>GraphQL</li>
                    </ul>
            </div>
        </div>
    )
}

export default Resume;