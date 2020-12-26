const path = require("path")

//module.exports.onCreateNode = ({ node, actions }) => {
//const { createNodeField } = actions

//if (node.internal.type === "MarkdownRemark") {
//console.log(JSON.stringify(node, undefined, 4))
//console.log(node.fileAbsolutePath)
// const slug = path.basename(node.fileAbsolutePath, ".md")
//console.log(slug)
//createNodeField({
// node,
//name: "slug",
//value: slug,
//})
//}
//}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  return graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create blog post pages.
    result.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.slug}`,
        component: blogTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
