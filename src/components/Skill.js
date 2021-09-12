import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Skill.css";

const Skill = () => {
    const Icons = [

        {
            name: "HTML5",
            logo: "assets/html.png",
            altIcon: "html",
            height: "100px",
            width: "100px"
        },
        {
            name: "CSS3",
            logo: "assets/css.png",
            altIcon: "css",
            height: "100px",
            width: "200px"
        },
        {
            name: "React",
            logo: "assets/react.png",
            altIcon: "react",
            height: "100px",
            width: "150px"
        },
        {
            name: "Javascript",
            logo: "assets/javascript.jpg",
            altIcon: "javascript",
            height: "115px",
            width: "160px"
        }
    ]

    const IconsSecondRow = [

        {
            name: "MongoDB",
            logo: "assets/mongodb.png",
            altIcon: "mongodb",
            height: "100px",
            width: "75px"
        },
        {
            name: "Express js",
            logo: "assets/express.jpg",
            altIcon: "express js",
            height: "100px",
            width: "200px"
        },
        {
            name: "Node js",
            logo: "assets/nodejs.png",
            altIcon: "node js",
            height: "100px",
            width: "150px"
        }
    ]

    return (
        <div>

            <Container className="SkillContain">
                <h1>Skills</h1>
                <br></br><br></br>
                <div className="SkillBox">
                    <Row>
                        {
                            Icons.map(({ name, logo, altIcon, height, width }) => (

                                < Col className="alignIcon" >
                                    <img height={height} width={width} src={logo} alt={altIcon}></img>
                                    <h5> {name}</h5>
                                </Col>
                            ))
                        }
                    </Row>

                    <br></br><br></br><br></br>

                    <Row>
                        {
                            IconsSecondRow.map(({ name, logo, altIcon, height, width }) => (

                                < Col className="alignIcon" >
                                    <img height={height} width={width} src={logo} alt={altIcon}></img>
                                    <h5> {name}</h5>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container >
        </div >
    )
}

export default Skill;