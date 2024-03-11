import React from 'react'
import "./about.css"
import about from "../../../assets/image 1 1.png"

const About = () => {
  return (
    <section id="about">
        <div class="container about_main">
            <div class="about_img">
                <img src={about} alt="" />
            </div>
            <div class="about_text">
                <h4>EAST nUSA TENGGARA</h4>
                <h2>Have you enjoyed your holiday?</h2>
                <p>You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.</p>
                <a href="#">Read more</a>
            </div>
        </div>
    </section>
  )
}

export default About