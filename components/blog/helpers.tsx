import { Article } from '@framework/schema'

export function getLink(handle: string) {
  return `/blog/${handle}`
}
export function getAllTagsFromArticles(articles: Article[]) {
  return articles.flatMap((article) => article.tags || []).filter(Boolean)
}
