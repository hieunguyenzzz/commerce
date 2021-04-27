import { Article, Product } from '@commerce/types'
import {
  Article as ShopifyArticle,
  Checkout,
  CheckoutLineItemEdge,
  ImageConnection,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
} from '../schema'
import type { Cart, LineItem } from '../types'

const money = ({ amount, currencyCode }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  }
}
// TODO (bc) : Remove or standarize this.
const sizeLabelMap = {
  'x-small': 'xs',
  small: 's',
  medium: 'm',
  large: 'l',
  'x-large': 'xl',
  'xx-large': 'xxl',
}
const fixSizeLabel = (sizeStr: string) => {
  return (sizeLabelMap as any)[sizeStr] || sizeStr
}
const normalizeProductOption = ({
  id,
  name: displayName,
  values,
}: ProductOption) => {
  return {
    __typename: 'MultipleChoiceOption',
    id,
    displayName: displayName.toLowerCase(),
    values: values.map((value) => {
      let output: any = {
        label: value,
      }
      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColors: [value],
        }
      }
      if (displayName.match(/size?r/gi)) {
        output = {
          ...output,
          values: fixSizeLabel(value.toLowerCase()),
        }
      }
      return output
    }),
  }
}

const normalizeProductImages = ({ edges }: ImageConnection) =>
  edges?.map(({ node: { originalSrc: url, ...rest } }) => ({
    url,
    ...rest,
  }))

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
  return edges?.map(
    ({
      node: { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 },
    }) => {
      return {
        id,
        name: title,
        sku: sku ?? id,
        price: +priceV2.amount,
        listPrice: +compareAtPriceV2?.amount,
        requiresShipping: true,
        options: selectedOptions.map(({ name, value }: SelectedOption) => {
          const options = normalizeProductOption({
            id,
            name,
            values: [value],
          })
          return options
        }),
      }
    }
  )
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    vendor,
    images,
    variants,
    description,
    handle,
    priceRange,
    options,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle?.replace(/^\/+|\/+$/g, ''),
    price: money(priceRange?.minVariantPrice),
    images: normalizeProductImages(images),
    variants: variants ? normalizeProductVariants(variants) : [],
    options: options
      ? options
          .filter((o) => o.name !== 'Title') // By default Shopify adds a 'Title' name when there's only one option. We don't need it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
          .map((o) => normalizeProductOption(o))
      : [],
    ...rest,
  }

  return product
}

export function normalizeCart(checkout: Checkout): Cart {
  return {
    id: checkout.id,
    customerId: '',
    email: '',
    createdAt: checkout.createdAt,
    currency: {
      code: checkout.totalPriceV2?.currencyCode,
    },
    taxesIncluded: checkout.taxesIncluded,
    lineItems: checkout.lineItems?.edges.map(normalizeLineItem),
    lineItemsSubtotalPrice: +checkout.subtotalPriceV2?.amount,
    subtotalPrice: +checkout.subtotalPriceV2?.amount,
    totalPrice: checkout.totalPriceV2?.amount,
    discounts: [],
  }
}

function normalizeLineItem({
  node: { id, title, variant, quantity, ...rest },
}: CheckoutLineItemEdge): LineItem {
  return {
    id,
    variantId: String(variant?.id),
    productId: String(variant?.id),
    name: `${title}`,
    quantity,
    variant: {
      id: String(variant?.id),
      sku: variant?.sku ?? '',
      name: variant?.title!,
      image: {
        url: variant?.image?.originalSrc ?? '/product-img-placeholder.svg',
      },
      requiresShipping: variant?.requiresShipping ?? false,
      price: variant?.priceV2?.amount,
      listPrice: variant?.compareAtPriceV2?.amount,
    },
    path: String(variant?.product?.handle),
    discounts: [],
    options:
      // By default Shopify adds a default variant with default names, we're removing it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
      variant?.title == 'Default Title'
        ? []
        : [
            {
              value: variant?.title,
            },
          ],
  }
}
export function normalizeBlog(node: ShopifyArticle): Article {
  const {
    id,
    title: name,
    content,
    contentHtml,
    image,
    handle,
    publishedAt,
    seo,
    tags,
  } = node
  let article = {
    id: id || handle,
    name,
    description: content,
    path: `/${handle}`,
    publishedAt,
    slug: handle?.replace(/^\/+|\/+$/g, ''),
    content: content || null,
    contentHtml: contentHtml || null,
    tags,
  } as Article
  if (image) {
    const { originalSrc, altText, ...rest } = image
    article.image = {
      url: image.originalSrc,
      altText: image.altText || name,
      ...rest,
    }
  }
  if (seo) {
    const { title, description, ...rest } = seo
    article.seo = {
      title: title || name,
      description: description || content,
    }
  }
  return article
}
