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
    const serviceTemplate = path.resolve('./src/templates/service.js')

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
            path: `/services/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}