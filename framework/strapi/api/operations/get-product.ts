import type { OperationContext } from '@commerce/api/operations'
import { GetProductOperation, Product } from '@commerce/types/product'
import { StrapiConfig } from '..'
import data from '../../data.json'

export default function getProductOperation({
  commerce,
}: OperationContext<any>) {
  async function getProduct<T extends GetProductOperation>({
    query = '',
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<StrapiConfig>
    preview?: boolean
  } = {}): Promise<Product | {} | any> {
    return {
      product: data.products.find(({ slug }) => slug === variables!.slug),
    }
  }

  return getProduct
}
