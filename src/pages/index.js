import { graphql, Link } from 'gatsby'
import React from 'react'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allCatsYaml.nodes.map(c => {
      return (
        <p>
          <Link to={`cats/${c.name}`}>{c.name}</Link>
        </p>
      )
    })}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allCatsYaml {
      nodes {
        name
        gender
        type
      }
    }
  }
`
