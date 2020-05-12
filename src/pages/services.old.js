import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Base from '../components/base'
import servicesStyles from '../components/services.module.css'
// import Head from '../components/head'

const OldServices = () => {
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
            <ul className={servicesStyles.services}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={servicesStyles.service_item}>
                            <Link to={`/services/${edge.node.fields.slug}`}><h1>{edge.node.frontmatter.title}</h1></Link>
                            
                        </li>
                    )
                })}
            </ul>
            </Base>
        </div>
    )
}

export default OldServices