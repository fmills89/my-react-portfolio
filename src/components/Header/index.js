import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentComp, setCurrentComp } = props;

    return (
        <header>
            <div className='my-name' class='content has-text-centered'>
                <p className='title is-1 pt-5'>Forrest Mills</p>
            </div>
            <div>
                <Nav
                    currentComp={currentComp}
                    setCurrentComp={setCurrentComp}
                ></Nav>
            </div>
        </header>
    )
}

export default Header;