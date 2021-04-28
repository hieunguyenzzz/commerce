import type { Product } from '@commerce/types'
export type SelectedOptions = Record<string, string | null>
const sizeRange = ['6', '8', '10', '12', '14', '16']
export function getSizeRange(product: Product) {
  const productsizes = product.options.flatMap((option) => {
    if (option.displayName === 'size') {
      return option.values
    }
    return []
  })
  return sizeRange.map((size) => ({
    label: size,
    values: size,
    available: productsizes.find((option) => option.label === size),
  }))
}
export function getVariant(product: Product, opts: SelectedOptions) {
  const variant = product.variants.find((variant) => {
    return Object.entries(opts).every(([key, value]) =>
      variant.options.find((option) => {
        if (
          option.__typename === 'MultipleChoiceOption' &&
          option.displayName === key
        ) {
          return option.values.find((v) => v.label === value)
        }
      })
    )
  })
  return variant
}
