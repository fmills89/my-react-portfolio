import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentComp, setCurrentComp } = props;

    return (
        <header>
            <div className='my-name'>
                <p className='title is-1 p-5'>Forrest Mills</p>
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