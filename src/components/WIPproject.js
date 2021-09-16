import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./WIPproject.css";

export default function WIPproject() {
    const WIPp = [
        {
            name: "Tiktok Clone",
            description: "Tiktok website built with the mern stack. Material ui and axios framework was used. Material ui was used for the buttons, icons, and the container. Axios to fetch the informations. Heroku was also used to deploy the backend. Only the video, its informations and layout of the website are implemented.",
            github: "https://github.com/SundyWundy/tiktok-clone-",
            site: "",
        }
    ]
    return (
        <div>
            <Container className="ProjectContain">
                <h1>Work in Progress Projects</h1>
            {
                WIPp.map(({name, description, github, site})=>(
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
        </div>
    )
}
