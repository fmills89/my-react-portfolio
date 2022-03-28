import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const build = currentProject.build;
    const repo = currentProject.repo;
    const live = currentProject.live;
 
    return ( 
        <Card class='m-2 p-1'>
            <Card.Img
                class='image is-200x200'
                variant='top'
                src={require(`../../assets/img/${image}`)}
                // className='card-image'
            />
                <Card.Body class='has-text-centered m-1 p-2'>
                    <Card.Title class='title is-4 m-1 p-1'>{name}</Card.Title>
                    <Card.Text class='subtitle is-6 m-1'>{description}</Card.Text>
                    {/* <Card.Subtitle class='title is'>Built With</Card.Subtitle> */}
                    <Card.Text class='subtitle is-7 m-1'>{build}</Card.Text>
                <div class='level-item has-text-centered'>
                    <Card.Link href={repo} target='_blank' className='card-link'>
                        <div class='icon is-large m-3 p-2'>
                            <a
                                href={repo}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                            <img 
                                src={require('../../assets/logos/github-repo-logo.png')}
                                alt='Github repo icon'
                                class='logo'
                            ></img>
                            </a>
                        </div>
                    </Card.Link>
                    <br></br>
                    <Card.Link href={live} target='_blank' className='card-link'>
                        <div class='icon is-large m-3 p-2'>
                            <a
                                href={live}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                            <img 
                                src={require('../../assets/logos/live-logo.png')}
                                alt='Github repo icon'
                                class='logo'
                            ></img>
                            </a>
                        </div>
                    </Card.Link>
                </div>
                </Card.Body>
        </Card>
    );
}

export default Project;