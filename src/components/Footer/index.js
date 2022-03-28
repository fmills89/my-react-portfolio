import React from 'react';

function Footer () {
    return (
        <footer className='footer'>
            <div className="icon is-large">
                <a
                    href='https://github.com/fmills89'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                <img
                    src={require('../../assets/logos/github-logo.png')}
                    alt='GitHub'
                    className='logo'
                ></img>
                </a>
            </div>
            <div className='icon is-large'>
                <a
                    href='https://www.linkedin.com/in/forrest-mills-dev'
                    target="_blank"
                    rel='noopener noreferrer'
                >
                <img 
                    src={require('../../assets/logos/linkedin-logo.png')}
                    alt="linkedin"
                    className='logo'
                ></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;