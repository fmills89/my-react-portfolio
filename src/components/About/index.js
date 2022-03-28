import React from 'react';


function About() {
    return (
       <div class='content has-text-centered'>
           <p className='content is-medium title is-2'>About Me</p>
           <img className="my-pic" src={require('../../assets/pics/89666151.jpg')} alt="Forrest Mills"/>
           <p className='content mt-4 subtitle is-4'>
           👋  My name is Forrest and I am a 
            full stack developer or something close to it!
            I recently graduated from a Trilogy Bootcamp offered through UTSA's School of Data Science.
            Over the course of 6 months I have learned 
            the stack from front-end all the way to the back end.
           </p>
       </div>
    );
}

export default About;