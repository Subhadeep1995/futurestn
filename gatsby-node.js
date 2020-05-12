const path = require('path')

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {

        const slug = path.basename(node.fileAbsolutePath, '.md')

            createNodeField({
                node,
                name: 'slug',
                value: slug
            })
            console.log(JSON.stringify(node, undefined, 5))
        
        
    }

    
}


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const oldServiceTemplate = path.resolve('./src/templates/service.old.js')


    //query for markdown stuff
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: serviceTemplate,
            path: `/old-services/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}




// Page Creation Done Below




exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    // query for the articles page

    const result = await graphql(`query GetArticles {
        articles: allContentfulArticle {
          nodes {
            url
          }
        }
      }`)


    //query for services page

    const serviceresult = await graphql(`
    query ServicesQuery {
        services: allContentfulService {
          nodes {
            slug
          }
        }
      }
    `)

    // creating the articles page

    result.data.articles.nodes.forEach((article) => {
        createPage({
            path: `/article/${article.url}`,
            component: path.resolve(`src/templates/article.js`),
            context: {
                url: article.url,
            }
        })
    } )


    // for the services page

    serviceresult.data.services.nodes.forEach((service) => {
        createPage({
            path: `/services/${service.slug}`,
            component: path.resolve(`src/templates/serviceTemplate.js`),
            context: {
                slug: service.slug,
            }
        })
    })

}



// exports.createPages = async ({graphql, actions}) => {
//     const {createPage} = actions
//     const serviceresult = await graphql(`
//     query ServicesQuery {
//         services: allContentfulService {
//           nodes {
//             slug
//           }
//         }
//       }
//     `)

//     serviceresult.data.services.nodes.forEach((service) => {
//         createPage({
//             path: `/services/${service.slug}`,
//             component: path.resolve(`src/templates/serviceTemplate.js`),
//             context: {
//                 slug: service.slug,
//             }
//         })
//     })
// }