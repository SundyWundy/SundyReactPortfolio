import { Container } from "react-bootstrap";
import "./About.css";


const About = () => {
    return (
        <div>
            <Container className="AboutContain">
                <h1>About Me!</h1>
                <div className="AboutBox">

                    <p>I'm a recent graduate from California State of Northridge with a Bachelor of Computer Science.
                        Passionate about coding and finding solutions to problems.

                        <br></br><br></br>
                        Apart from coding, I enjoy watching movies and television shows. I'm always looking for good one to watch from any regions,
                        so feel free reach out and recommend me some.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default About;