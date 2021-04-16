export const getAllBlogQuery = /* GraphQL */ `
  query getAllBlogs($first: Int = 250) {
    articles(first: $first) {
      edges {
        node {
          title
          content
          handle
          publishedAt
        }
      }
    }
  }
`
export default getAllBlogQuery
