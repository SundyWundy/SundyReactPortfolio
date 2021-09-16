import { Container, Row, Col } from "react-bootstrap";
import "./About.css";


const About = () => {
    return (
        <div>
            <Container className="AboutContain">
                <h1>About Me</h1>
                <div className="AboutBox">

                <Row>
                    <Col></Col>
                    <Col xs={10}>
                    <h2>Hello, I'm Sundy!</h2>
                    <p>
                        I'm a recent graduated from California State of Northridge with a Bachelor of Computer Science.
                        Passionate about coding and finding solutions to problems. 
                        I'm excited to work with other developers and learn a great deal. 
                         


                        <br></br><br></br>
                        Apart from coding, I enjoy watching movies and television shows. Other regions included.
                    </p>
                    </Col>
                    <Col></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default About;