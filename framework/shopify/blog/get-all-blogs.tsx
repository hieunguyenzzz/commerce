import {Article, ArticleEdge} from "@framework/schema";
import {getConfig, ShopifyConfig} from "@framework/api";
import {getAllBlogQuery} from "@framework/utils";

type Variables = {
  first?: number
}

type ReturnType = {
  articles: Article[]
}


const getAllBlogs = async (options?: {
  variables?: Variables
  config: ShopifyConfig
  preview?: boolean
}): Promise<ReturnType> => {
  let { config, variables = { first: 250 } } = options ?? {}
  config = getConfig(config)
  const { locale } = config
  const { data } = await config.fetch(getAllBlogQuery, { variables })
  const articles = data.articles?.edges?.map(
    ({ node: { title: name, handle, ...node } }: ArticleEdge) => ({
      ...node,
      url: `/${locale}/${handle}`,
      name,
    })
  )

  return { articles }
}

export default getAllBlogs
