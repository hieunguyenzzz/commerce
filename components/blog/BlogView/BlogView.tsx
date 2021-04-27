import { Article } from '@commerce/types'
import { Breadcrumb } from '@components/common'
import { Facebook, Pinterest, Twitter } from '@components/icons'
import { Container, Text } from '@components/ui'
import { formatdate } from '@lib/datetime'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { getLink } from '../helpers'
interface Props {
  articles: Article[]
  article: Article
  title?: string
}
const createFacebookShareUrl = (url: string) =>
  `https://www.facebook.com/sharer.php?u=${url}`
const createTwitterShareUrl = (url: string) =>
  `https://twitter.com/share?url=${url}`
const createPinterestShareUrl = (url: string) =>
  `https://pinterest.com/pin/create/button/?url=${url}`

const BlogView: React.FC<Props> = ({
  article,
  articles,
  title = 'JOURNAL',
}) => {
  const { locale, isReady } = useRouter()
  return (
    <>
      <NextSeo
        title={article?.seo?.title}
        description={article?.seo?.description}
        openGraph={{
          type: 'article',
          title: article?.seo?.title,
          description: article?.seo?.description,
        }}
      />
      <Container className="pt-md mb-6">
        <Breadcrumb>
          <Link href={`/blog`}>{title}</Link>
          {'/ '}
          {article.tags[0] ? (
            <Link href={`/blog/${article.tags[0]}`}>{article.tags[0]}</Link>
          ) : (
            <Link href={`/blog`}>all</Link>
          )}
        </Breadcrumb>
      </Container>
      <div className="max-w-2xl mx-auto">
        <Container data-testid="BlogView">
          <div className="prose">
            <Text variant="h2">{article.name}</Text>
            <div style={{ textAlign: 'left' }}>
              <span>
                We’ve been long-distance friends with the ever inspiring Sarah
                Shabacon for almost four years now. Mother of two insanely
                adorable boys, Sarah is based in Vancouver and has remained a
                shining light throughout our Instagram feed, with her perfectly
                curated, golden and neutral toned palette. She is also the
                master-mind behind vintage online boutique Bohème Goods. For our
                final instalment of our ‘
              </span>
              <i>At Home Series’</i>
              <span>
                &nbsp;, we chat with Sarah about life at home as both Mother
                and&nbsp;Business owner.
              </span>
              &nbsp;
              <img
                src="//cdn.shopify.com/s/files/1/1139/4362/files/2_204fd679-103a-412c-bd50-e89dc2b65525.png?v=1594355259"
                style={{ float: 'none' }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong>
                Where are you from, and how did you come to be living life as
                you know it?
                <br />
              </strong>
              Just outside Vancouver, Canada. I was born and raised here but as
              a teen spent time in Germany and Tanzania which changed my outlook
              on what life could look like for someone from my small town. My
              husband and I found out we were having a son when I was 20, so I
              quit my job working in an office to focus on my mental and
              physical health in preparation. When my son Isaac (now 7) was a
              few months old I began sewing and selling hair accessories…I did
              this for a few years and although it was a successful business, I
              found myself spending more time at vintage shops and decided to
              start from scratch and open Bohème Goods. I honestly thought I
              would sell 3 or 4 items a month and things would be slow again,
              but I was incredibly fortunate to have grown in a rather rapid but
              organic way.
              <span>&nbsp;</span>
              <strong>
                <br />
              </strong>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span>&nbsp;</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong>
                Please tell us about your online store Bohème Goods?
                <br />
              </strong>
              I realized about a year into running Bohème that it was a curation
              of my mind. The things I love to surround myself with and the
              things I love to wear. It’s what has made running a business on my
              own such a rewarding journey.<span>&nbsp;</span>
              <strong>
                <br />
              </strong>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span>&nbsp;</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong>
                What are your favourite at home rituals?&nbsp;
                <br />
              </strong>
              Sitting on the patio reading while the boys play outside. In the
              morning I turn on music and open all the windows to let the
              sunlight in before waking our boys.
              <br />
              <strong>
                <br />
              </strong>
            </div>
            <div style={{ textAlign: 'left' }} />
            <div style={{ textAlign: 'left' }}>
              <strong>
                What are you currently listening to?
                <br />
              </strong>
              A lot of old school Jazz artists such as<span>&nbsp;</span>
              <em>Sun Ra and His Arkestra</em>
              <span>&nbsp;</span>lately. My father in-law was a photographer in
              New York in the 1960’s and ran with some of the greatest musicians
              of that time. It’s been a cool way to connect with some of our
              families history and get into a new genre. On a much less chill
              note, I am a huge Unsolved Crime Podcast nerd!!
              <br />
              <br />
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong>
                What’s inspiring you right now?<span>&nbsp;</span>
                <span>
                  &nbsp;
                  <br />
                </span>
              </strong>
              Old art books - with things having slowed down over the past
              months I’ve gotten time to really dig into our bookcase and
              re-read some of my favourite books.
              <br />
              <br />
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong>
                What are you grateful for?&nbsp;
                <br />
              </strong>
              My families health. We’ve had a hard year of losses and health
              scares so to be together and healthy right now is something I’m so
              grateful for.
              <br />
              <br />
              <strong>
                Favourite thing about your home?&nbsp;
                <br />
              </strong>
              All the natural light we get, when we bought our town-home this
              wasn’t something we even considered as important but after living
              here for 8 years we realize that it sets the mood every single
              day.
              <br />
              <br />
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong>
                If you could give your younger selves any advice based on
                everything you know now, what would it be?&nbsp;
                <br />
              </strong>
              To leave it to the universe.
              <br />
              <strong>
                <br />
              </strong>
            </div>
            <div style={{ textAlign: 'left' }} />
            <div style={{ textAlign: 'left' }}>
              <strong>
                How do you end your day?
                <span>
                  &nbsp;
                  <br />
                </span>
              </strong>
              A long warm shower followed by stretching and slow exercise to
              meditative music before tucking the boys into bed.
              <span>&nbsp;</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span>
                <img
                  src="//cdn.shopify.com/s/files/1/1139/4362/files/7.png?v=1594355697"
                  style={{ float: 'none' }}
                />
              </span>{' '}
              <img
                src="//cdn.shopify.com/s/files/1/1139/4362/files/4_5e9e3e08-43db-4236-8d17-2a2d20b6c584.png?v=1594355731"
                style={{ float: 'none' }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <img
                src="//cdn.shopify.com/s/files/1/1139/4362/files/10.png?v=1594355580"
                style={{ float: 'none' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="//cdn.shopify.com/s/files/1/1139/4362/files/8.png?v=1594355997"
                style={{ float: 'none' }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <img
                src="//cdn.shopify.com/s/files/1/1139/4362/files/3_fdfee3ca-66e1-4547-80e3-9a1286ba4f4b.png?v=1594356049"
                style={{ float: 'none' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="//cdn.shopify.com/s/files/1/1139/4362/files/5_9548ea80-56f1-4485-a2e8-a3b12dd2d828.png?v=1594356117"
                style={{ float: 'none' }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <img
                src="//cdn.shopify.com/s/files/1/1139/4362/files/6.png?v=1594356147"
                style={{
                  marginRight: '0.347222px',
                  marginLeft: '0.347222px',
                  float: 'none',
                }}
              />
            </div>
          </div>
          {isReady && (
            <div className="space-y-sm lg:space-y-4">
              <div className="font-bold">Share</div>
              <div className="space-x-6 flex text-2xl">
                <a
                  href={createFacebookShareUrl(window.location.href)}
                  target="_blank"
                  rel="noopener"
                  className="rounded hover-effect-1 bg-facebook text-white p-2"
                >
                  <Facebook />
                </a>
                <a
                  href={createTwitterShareUrl(window.location.href)}
                  target="_blank"
                  rel="noopener"
                  className="rounded hover-effect-1 bg-twitter text-white p-2"
                >
                  <Twitter />
                </a>
                <a
                  href={createPinterestShareUrl(window.location.href)}
                  target="_blank"
                  rel="noopener"
                  className="rounded hover-effect-1 bg-pinterest text-white p-2"
                >
                  <Pinterest />
                </a>
              </div>
            </div>
          )}
        </Container>
      </div>

      <div className="py-24  mt-12 bg-accents-1">
        <Container>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            {new Array(2).fill(articles).map((articles, i: number) => {
              const article = articles[i]
              if (!article) return null
              return (
                <Link key={article.slug} href={getLink(article.slug)}>
                  <a>
                    <Image
                      className="bg-accents-1"
                      layout="responsive"
                      src={article.image?.url}
                      width={630}
                      height={369}
                    ></Image>
                    <div className="p-5 space-y-1 text-center">
                      <h2 className="header-1 uppercase">
                        {(article as any).name as any}
                      </h2>
                      <Text variant="subtitle">
                        {formatdate(article.publishedAt, locale, 'long')}
                      </Text>
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        </Container>
      </div>
    </>
  )
}
export default BlogView
