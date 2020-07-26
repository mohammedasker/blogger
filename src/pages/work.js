import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Readwits from "../images/readwits.png"
import Devtoo from "../images/devtoo.png"
import Dropwit from "../images/dropwit.png"
import NotesApp from "../images/notesapp.png"
import Portfolio from "../images/portfolio.png"

import "./work.css"

const Work = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <h1>My Works</h1>
    <p>Here are some projects that I have worked recently.</p>
    <section class="projects">
      <div class="project-box">
        <h3>Readwits</h3>
        <p class="project-text">
          A simple book finder web app built with where you can search books to
          read. Tools used: HTML, CSS, JavaScript, REST API.
        </p>
        <img
          src={Readwits}
          alt="A screenshot of book finder web app used for displaying my work"
        />
        <a
          href="https://mohammedasker.github.io/Readwits/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Live</button>
        </a>
        <a
          href="https://github.com/mohammedasker/Readwits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Code</button>
        </a>
      </div>
      <div class="project-box">
        <h3>Dropwit</h3>
        <p class="project-text">
          An imaginary delivery service company website built to practice web a
          responsive principles. Tools used: HTML and CSS.
        </p>
        <img
          src={Dropwit}
          alt="A screenshot of fictional logistic startup website used for displaying my work"
        />
        <a
          href="https://mohammedasker.github.io/Dropwit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Live</button>
        </a>
        <a
          href="https://github.com/mohammedasker/Dropwit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Code</button>
        </a>
      </div>
      <div class="project-box">
        <h3>NotesApp</h3>
        <p class="project-text">
          A simple note-taking web app where you can create, edit, and delete
          notes. Tools used: HTML, CSS, JavaScript.
        </p>
        <img
          src={NotesApp}
          alt="A screenshot of note taking web app used for displaying my work"
        />
        <a
          href="https://mohammedasker.github.io/NotesApp//"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Live</button>
        </a>
        <a
          href="https://github.com/mohammedasker/NotesApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Code</button>
        </a>
      </div>
      <div class="project-box">
        <h3>Devtoo</h3>
        <p class="project-text">
          A clone DEV Community homepage built to practice React library. Tools
          used: React, JavaScript, HTML, and CSS.
        </p>
        <img
          src={Devtoo}
          alt="A screenshot of devtoo used for displaying my work"
        />
        <a href=" https://devtoo.netlify.app/" target="_blank" rel="noopener">
          <button class="project-button">View Live</button>
        </a>
        <a
          href="https://github.com/mohammedasker/devtoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Code</button>
        </a>
      </div>
      <div class="project-box">
        <h3>Portfolio</h3>
        <p class="project-text">
          My personal portfolio website built to showcase all my works. Tools
          used: HTML and CSS.
        </p>
        <img
          src={Portfolio}
          alt="A screenshot of my portfolio website for displaying my work"
        />
        <a
          href=" https://mohammedasker.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Live</button>
        </a>
        <a
          href="https://github.com/mohammedasker/mohammedasker.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="project-button">View Code</button>
        </a>
      </div>
    </section>
  </Layout>
)

export default Work
