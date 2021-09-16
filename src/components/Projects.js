import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Projects.css";


const Projects = () => {
    const projectData = [
        {
            name: "Minecraft Museum",
            description: "A website that provides informations on items, blocks, mobs, and a virtual reality museum of Minecraft.",
            github: "https://github.com/SundyWundy/MinecraftMuseum",
            site: "https://sundywundy.github.io/MinecraftMuseum/",
        },
        {
            name: "Unison",
            description: "A calendar application made with android studio. This application use firebase to store many users account and are able to share their calendar with other users for planning. Kotlin is used for the programming language.",
            github: "https://github.com/SundyWundy/Unison?",
            site: "",
        },
        {
            name: "Mask Detection",
            description: "This project detect who is wearing a mask or not in real time and is made with keras and python.",
            github: "https://github.com/SundyWundy/FaceMaskDetection?",
            site: "",
        }
    ];


    return (
        <div>
            <Container className="ProjectContain">
                <h1>My Projects</h1>
                {
                    projectData.map(({ name, description, site, github }) => (
                        <div className="ProjectBox">
                            <h2>{name}</h2>
                            <Row>
                                <Col>
                                    <p>{description}</p>
                                </Col>
                                <Col md={{ span: 3, offset: 3 }}>
                                    <a href={github} target="#_blank">
                                        Github Repo
                                    </a>
                                    <br></br>
                                    {site.length > 0 &&
                                        <a href={site} target="#_blank">
                                            Demo
                                        </a>
                                    }
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </Container>
            <br></br>
        </div>
    )
}

export default Projects