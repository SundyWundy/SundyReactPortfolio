import { Nav, Navbar, Row, Col } from "react-bootstrap"
import "./Navibar.css";

import 'bootstrap/dist/css/bootstrap.css'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"

import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skill from "./Skill";
import WIPproject from "./WIPproject";



const Navibar = () => {
  const history = useHistory();
  const [Rpath, setRpath] = useState("home");

  return (
    <div>
      <Route exact path="/">
        <Redirect to="/"></Redirect>
      </Route>

      <Route render={() => setRpath("home")} exact path="/">
      </Route>

      <Route render={() => setRpath("about")} exact path="/about">
      </Route>

      <Route render={() => setRpath("skill")} exact path="/skill">
      </Route>

      <Route render={() => setRpath("project")} exact path="/project">
      </Route>

      <Route render={() => setRpath("wipproject")} exact path="/wipproject">
      </Route>


      <Row>
        <Navbar className="NavDeco" bg="dark" variant="dark" fixed="top">
          <Col>
            <Nav variant="pills" activeKey={Rpath} >
              <Nav.Item>
                <Nav.Link eventKey="home" onClick={() => history.push("/")}>Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="about" onClick={() => history.push("/about")}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skill" onClick={() => history.push("/skill")}>Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="project" onClick={() => history.push("/project")}>Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="wipproject" onClick={() => history.push("/wipproject")}>WIP Projects</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col>
            <Nav className="justify-content-end" style={{ marginRight: "20px" }}>
              <a class="nav-link" href="mailto: sundypongpuntara@yahoo.com" rel="noreferrer" target="_blank"><AiOutlineMail size={30} /></a>
              <a class="nav-link" href="https://www.linkedin.com/in/sundypongpuntara/" rel="noreferrer" target="_blank"><AiFillLinkedin size={30} /></a>
              <a class="nav-link" href="https://github.com/SundyWundy" rel="noreferrer" target="_blank"><AiFillGithub size={30} /></a>
            </Nav>
          </Col>
        </Navbar>
      </Row>

      <div>
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/skill">
            <Skill />
          </Route>

          <Route path="/project">
            <Projects />
          </Route>

            <Route path="/wipproject">
            <WIPproject />
          </Route>

             <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div >
  )
}

export default Navibar