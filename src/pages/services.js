import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Base from '../components/base'

const Services = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                author
                date
                posttype
              }
              html
              fields {
                  slug
              }
            }
          }
        }
      }
    `)
    return (
        <div>
            <Base>
            <h1>Services</h1>
            <ul>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/services/${edge.node.fields.slug}`}><h1>{edge.node.frontmatter.title}</h1></Link>
                            <small>{edge.node.frontmatter.date}</small>
                            <p>{edge.node.html}</p>
                        </li>
                    )
                })}
            </ul>
            </Base>
        </div>
    )
}

export default Services