import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Styles from "../styles/index.scss"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found!</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
