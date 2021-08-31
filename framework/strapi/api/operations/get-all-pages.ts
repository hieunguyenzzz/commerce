export type Page = { url: string }
export type GetAllPagesResult = { pages: Page[] }
import type { StrapiConfig } from '../index'

export default function getAllPagesOperation() {
  function getAllPages({
    config,
    preview,
  }: {
    url?: string
    config?: Partial<StrapiConfig>
    preview?: boolean
  }): Promise<GetAllPagesResult> {
    return Promise.resolve({
      pages: [],
    })
  }
  return getAllPages
}
