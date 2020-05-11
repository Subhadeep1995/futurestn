import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Base from '../components/base'
import servicesStyles from '../components/services.module.css'
// import Head from '../components/head'

const Articles = () => {
    const data = useStaticQuery(graphql`
    query ArticleQuery {
        allContentfulArticle {
          edges {
            node {
              author
              category
              created
              cover {
                children {
                  id
                }
                title
              }
              tags
              url
              title
            }
          }
        }
      }
    `)
    return (
        <div>
            
            <Base>
            <h1>Articles</h1>
            <ul>
                {data.allContentfulArticle.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/article/${edge.node.url}`}><h1>{edge.node.title}</h1></Link>
                            
                        </li>
                    )
                })}
            </ul>
            </Base>
        </div>
    )
}

export default Articles