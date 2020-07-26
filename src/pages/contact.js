import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const Contact = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`front-end developer`, `freelancer`, `blogger`]}
    />
    <h1>Contact</h1>
    <p>
      Got a website idea and want to turn it into a reality? Let's make it
      happen!
    </p>
    <div>
      <form
        class="contact-form"
        action="https://formspree.io/xpzydbja"
        method="POST"
        aria-label="contact-form"
      >
        <div class="input-box">
          <input
            type="text"
            class="name"
            name="name"
            aria-label="name"
            placeholder="Name"
            required
          />
          <br />
          <input
            type="email"
            class="email"
            name="email"
            aria-label="email"
            placeholder="Email"
            required
          />
        </div>
        <textarea
          class="message"
          name="message"
          aria-label="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" class="contact-button">
          Send
        </button>
      </form>
    </div>
  </Layout>
)

export default Contact
