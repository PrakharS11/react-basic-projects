import React from 'react';
import guyCoding from "../../Resources/Images/guyCoding.png";
import profileImage from "../../Resources/Images/dic6.PNG";
import ReactPlayer from 'react-player'
import { WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import "./styles/Intro.css";

function Intro() {

    const getIntroCard = () => {
        return (
            <section className="portfolio-intro-card-wrapper">
                <section className="portfolio-intro-card-bg-image">
                    <img src={guyCoding} />
                </section>
                <section className="portfolio-intro-card-content-wrapper">
                    <img src={profileImage}/>
                    <h2>Prakhar Srivastava</h2>
                    <p>2023	Degree in Bachelor of Technology C.S.E. w/ 7.56 CGPA.</p>
                    <p> Lovely Professional University, Jalandhar, Punjab</p>
                    <p> 2019 Intermediate with PCMC Stream from C.B.S.E Board</p>
                    <p> St. Patrick’s Sr. Sec. School, Jaunpur, Uttar Pradesh</p>
                    <p> 2017	High School form C.B.S.E Board with 8.4 CGPA</p>
                    <p> St. Patrick’s Sr. Sec. School, Jaunpur, Uttar Pradesh</p>

                    <div className="resume-CTA"><Link className="resume-link" to="resume">Resume</Link></div>
                </section>
            </section>
        )
    }

    const getIntroVideo = () => {
        let playerWidth = window.innerWidth > 660 ? "500px" : "100vw";
        return (<ReactPlayer width={playerWidth} height="400px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />)
    }

    const getIntroBody = () =>{
        return (
            <section className="portfolio-intro-body-wrapper">
                {getIntroCard()}
                {getIntroVideo()}
            </section>
        )
    }

  return (
  <div className="portfolio-intro-wrapper">
        <h1>Introduction</h1>
        {getIntroBody()}
        <div className="connect-whatsapp" onClick={()=>{window.open("https://wa.me/7004813287?text=Hello Harshal, I want to talk to you regarding an opening in my company.")}}>
            <WhatsAppOutlined style={{color:"#fff", fontSize:"30px"}}/>
        </div>
  </div>
  )
}

export default Intro;
