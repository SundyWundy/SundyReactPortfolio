import React from 'react'
import { Container } from 'react-bootstrap'
import "./Contact.css"
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"

export default function Contact() {
    return (
        <div className="ContactContain">
            <Container>
           <h1> Let's Get in Touch! </h1>
           <div className="Icons">
            <a className="link" href="mailto: sundypongpuntara@yahoo.com" rel="noreferrer" target="_blank"><AiOutlineMail size={50} /></a>
            <a className="link" href="https://www.linkedin.com/in/sundypongpuntara/" rel="noreferrer" target="_blank"><AiFillLinkedin size={50} /></a>
            <a className="link" href="https://github.com/SundyWundy" rel="noreferrer" target="_blank"><AiFillGithub size={50} /></a>
           </div>
        <form action="https://formsubmit.co/sundypong@gmail.com" method="POST"> 
            <input type="hidden" name="_subject" value="New Email From Portfolio" />
            <input className="inputBox" type="text" name="name" placeholder="Name" required />
            <br></br><br></br>
            <input className="inputBox" type="email" name="email" placeholder="Email" required />
            <br></br><br></br>
            <textarea className="msgBox" type ="text" name="message" placeholder="Message" required />
            <br></br><br></br>
            <button className="submitBtn" type="submit">SEND</button>

        </form>

            
        </Container>
        </div>
    )
}
