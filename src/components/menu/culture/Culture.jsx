import React from 'react'
import "./culture.css"
import img from "../../../assets/culture_image.jpg"

const Culture = () => {
  return (
    <section id="culture">
        <div class="container culture_main">
            <div class="culture_text">
                <h4>INDONESIAN CULTUR</h4>
                <h2>Our culture here is very friendly to people</h2>
                <p>known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.</p>
                <a href="#">read more</a>
            </div>
            <div class="culture_img">
                <img src={img} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Culture