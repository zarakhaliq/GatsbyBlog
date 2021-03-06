import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Styles from "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>My name is Zara and I am a full-stack web developer.</h2>

      <p>
        Need a developer? <Link to="/About">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
