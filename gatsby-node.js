const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const subPageTemplate = path.resolve(`src/templates/subpage.js`);
    const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: subPageTemplate,
            context: {}, // additional data can be passed via context
        })
    })
};