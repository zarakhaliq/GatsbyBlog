import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Styles from "../styles/index.scss"

const AboutMe = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        My name is Zara and I am an Aerospace Engineer with a passion for
        programming and web development.
      </p>
      <p>
        My hometown is London, United Kingdom and I went to Queen Mary
        University of London to become an engineer.
      </p>
      <p>Have a new project idea? Let's work together!</p>
      <Link to="/Contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutMe
