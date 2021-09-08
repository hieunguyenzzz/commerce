
import type { CartEndpoint } from '.'
const createQuoteMutation = `mutation createQuote {
  createQuote{
    quote{
      id
    }
  }
}}`
const getQuoteQuery = `query getQuote($id: ID!) {
  quote(id: $id){
  id
  customer{
    last_name
    first_name
  }
  email
  customer{
    id
    first_name
    last_name
  }
  active
  taxesIncluded
  lineItemsSubtotalPrice
  lineItems{
    id
    productId{
      id
      title
      description
      price
      images{
        url
        width
        height
      }
    }
    quantity
    name
    variantId
    path
    variant{
      id
      sku
      name
      image{
        url
        width
        height
      }
    }
  }
  subtotalPrice
  totalPrice
}
}`
// Return current cart info
const getCart: CartEndpoint['handlers']['getCart'] = async ({
  res,
  req,
  config,
}) => {
  let result: { data?: any } = {}
  const { cookies } = req
  const cartId = cookies[config.cartCookie]
  if (cartId) {
    try {
      result = await config.fetchStore(
        getQuoteQuery,{
          id:cartId
        }
      )
      console.log({result})
    } catch (error) {
      console.error(error)
    }
  }

  res.status(200).json({
    data:  {
            id: '5245ba32-61c5-468d-80b0-d8a42b8cfe33',
            customerId: '0',
            email: '',
            createdAt: '2021-09-02T02:09:56+00:00',
            currency: { code: 'USD' },
            taxesIncluded: false,
            lineItems: [
              {
                id: '2eec3139-85cc-4029-8c15-5d8dbfb058dd',
                variantId: '383',
                productId: '117',
                name: 'T-Shirt',
                quantity: 1,
                variant: {
                  id: '383',
                  sku: '5F6D80F2EB67C_11047-BL-M',
                  name: 'T-Shirt',
                  image: {
                    url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/products/117/images/534/Men-TShirt-Black-Front__70046.1603748348.220.290.png?c=1',
                  },
                  requiresShipping: true,
                  price: 160.12,
                  listPrice: 160.12,
                },
                path: 'jacket',
                discounts: [],
              },
              {
                id: 'ecea284e-8205-41ed-8350-c4d5626b211c',
                variantId: '395',
                productId: '116',
                name: 'Lightweight Jacket',
                quantity: 1,
                variant: {
                  id: '395',
                  sku: '5F6D80A544056_9908-BL-SM',
                  name: 'Lightweight Jacket',
                  image: {
                    url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/products/116/images/512/Men-Jacket-Front-Black__15466.1603283963.220.290.png?c=1',
                  },
                  requiresShipping: true,
                  price: 249.99,
                  listPrice: 249.99,
                },
                path: 'lightweight-jacket',
                discounts: [],
              },
            ],
            lineItemsSubtotalPrice: 410.11,
            subtotalPrice: 410.11,
            totalPrice: 410.11,
          }
  })
}

export default getCart
