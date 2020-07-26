import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyFace from "../images/guywithglasses.jpg"

import "./about.css"

const About = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`front-end developer`, `freelancer`, `blogger`]}
    />
    <h1 class="about-header">About me</h1>
    <div class="about-container">
      <img src={MyFace} class="about-image" aria-label="portrait of me" />
      <p class="about-text">
        I'm a Front-End Developer specialized in building a beautiful,
        mobile-responsive, and accessible websites and web applications. My
        interest lies in building a simple, but a beautiful user interface
        that's pleasant to browse around while also being aware of the
        accessibility.
        <br />
        <br />
        I like to learn new technologies and best practices every day and I
        share all the things that I've learnt on this blog.
        <br />
        <br />I am now available for hire and freelance opportunities and if you
        are a business looking for an online presence, you can{"  "}
        <a href="/contact">contact</a>
        {"  "}
        me today.
      </p>
    </div>
  </Layout>
)

export default About
