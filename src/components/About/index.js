import React from 'react';


function About() {
    return (
       <div>
           <p className='content is-medium'>Full Stack Developer</p>
           <hr />
           <img className="my-pic" src={require('../../assets/pics/89666151.jpg')} alt="Forrest Mills"/>
           <p className='content mt-4'>
           👋 Hello world! My name is Forrest and I am a 
            full stack developer or something close to it!
            I recently graduated from a Trilogy Bootcamp offered through UTSA's School of Data Science.
           </p>
           <p className='content'>
               Over the course of 6 months I have learned 
               the stack from front-end all the way to the back end.
           </p>
       </div>
    );
}

export default About;