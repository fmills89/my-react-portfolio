import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const build = currentProject.build;
    const repo = currentProject.repo;
    const live = currentProject.live;

    // function getBuilds(buildArray) {
    //     let buildList = '';

    //     for (var i = 0; i < buildArray.length; i++) {
    //         if (i === buildArray.length -1) {
    //             buildList += buildArray[i];
    //         } else {
    //             buildList += buildArray[i] + ", ";
    //         }
    //     }
    //     return buildList;
    // }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant='top'
                src={require(`../../assets/img/${image}`)}
                className='card-image'
            />
            <div className='center'>
                <Card.Body>
                    <Card.Title className='card-title'>{name}</Card.Title>
                    <Card.Text className='card-text'>{description}</Card.Text>
                    <Card.Subtitle className='card-subtitle'>Built With</Card.Subtitle>
                    <Card.Text className='card-techs'>{build}</Card.Text>
                    <Card.Link href={repo} target='_blank' className='card-link'>
                        {name} GitHub
                    </Card.Link>
                    <br></br>
                    <Card.Link href={live} target='_blank' className='card-link'>
                        {name} App
                    </Card.Link>
                </Card.Body>
            </div>
        </Card>
    );
}

export default Project;