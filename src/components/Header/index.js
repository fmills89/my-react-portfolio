import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentComp, setCurrentComp } = props;

    return (
        <header>
            <div>
                <h2>Forrest Mills</h2>
            </div>
            <div>
                <Nav
                    currentComp={currentComp}
                    setCurrentComp={setCurrentComp}
                ></Nav>
                 <hr />
            </div>
        </header>
    )
}

export default Header;