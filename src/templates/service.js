import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Base from '../components/base'

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ){
      frontmatter {
        title
        posttype
        date
      }
      html
    }
  }
`

const Service = (props) => {
    
    return (
        <div>
            <Base>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML= {{__html:props.data.markdownRemark.html}}></div>
            </Base>
        </div>
    )
}

export default Service