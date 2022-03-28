import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contactform from './components/Contact/index';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentComp, setCurrentComp] = useState("about");

  const renderComp = () => {
    switch (currentComp) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contactform />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mobile-header">
        <Header currentComp={currentComp} setCurrentComp={setCurrentComp}></Header>
      </div>
      <div>
        <main>
          {renderComp()}
        </main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>

  );
}

export default App;
