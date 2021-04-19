import { Article } from '@framework/schema'

export function getLink(handle: string) {
  return `/blog/${handle}`
}
export function getAllTagsFromArticles(articles: Article[]) {
  return articles
    .flatMap((article) => article.tags || [])
    .reduce((result: string[], tag) => {
      if (result.find((item) => item === tag)) {
        return result
      }
      result.push(tag)
      return result
    }, [])
}
