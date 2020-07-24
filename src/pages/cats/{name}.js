import { createPagesFromData, graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

const Cats = ({ data }) => {
  return <Layout>{JSON.stringify(data)}</Layout>
}

export const query = graphql`
  query CatsPosts($name: String) {
    catsYaml(name: { eq: $name }) {
      name
      gender
    }
  }
`

export default createPagesFromData(Cats, 'CatsYaml')
