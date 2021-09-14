export const loginQuery = /* GraphQl */ `query loginQuery{
    me{
      id
      username
      email
    }
  }`
export const customerQuery = /* GraphQl */ `query customerQuery($id:ID!){
    user(id:$id){
      id
      username
      email
      first_name
      last_name
      quotes(limit:1) {
          id
      }
    }
  }`
export  const getQuoteQuery = /* GraphQl */ `query getQuoteQuery($id: ID!, $userId: ID) {
    quotes(where: { id: $id, users_permissions_user: $userId }) {
      id
      customer {
        last_name
        first_name
      }
      email
      customer {
        id
        first_name
        last_name
      }
      active
      taxesIncluded
      lineItemsSubtotalPrice
      lineItems {
        id
        productId {
          id
          title
          description
          price
          images {
            url
            width
            height
          }
        }
        quantity
        name
        variantId
        path
        variant {
          id
          sku
          name
          image {
            url
            width
            height
          }
        }
      }
      users_permissions_user {
        id
        email
      }
      subtotalPrice
      totalPrice
    }
  }`