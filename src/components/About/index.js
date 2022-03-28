import React from 'react';


function About() {
    return (
       <div>
           <img className="my-pic" src={require('../../assets/pics/89666151.jpg')} alt="Forrest Mills"/>
           <p className='content is-medium title is-5 p-4'>About Me</p>
           <p className='content mt-4 subtitle is-5'>
           👋 Hello world! My name is Forrest and I am a 
            full stack developer or something close to it!
            I recently graduated from a Trilogy Bootcamp offered through UTSA's School of Data Science.
           </p>
           <p className='content subtitle is-5'>
               Over the course of 6 months I have learned 
               the stack from front-end all the way to the back end.
           </p>
       </div>
    );
}

export default About;