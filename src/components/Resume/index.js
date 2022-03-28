import React from 'react';

function Resume() {
    return (
        <div className='columns'>
            <div className='column'>
                <p className='content is-medium'>Resume</p>
                < hr/>

                <a
                    className='button is-primary'
                    href={require('../../assets/files/Forrests-Resume.pdf')}
                    target='_blank' rel='noreferrer'>
                        <span className='icon'>
                            <i className='fas fa-download'></i>
                        </span>
                        <span>Download My Resume</span>
                    </a>
            </div>
            <div className='column'>
                <p className='content is-medium'>Skills</p>
                <hr />
                <ul>
                    <li>HTML/CSS</li>
                    <li>MERN Stack</li>
                    <li>Javascript</li>
                    <li>MySql</li>
                    <li>Rest APIs</li>
                    <li>MVC</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;