import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Styles from "../styles/index.scss"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>

      <a
        href="https://www.linkedin.com/in/zahra-khaliq-a5488695"
        target="_blank"
      >
        Say Hi!<i class="fab fa-instagram"></i>
      </a>
    </Layout>
  )
}

export default Contact
