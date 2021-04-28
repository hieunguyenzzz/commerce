import { Product } from '@commerce/types'
import { Down } from '@components/icons'
import { ProductCard } from '@components/product'
import { Grid, Skeleton } from '@components/ui'
import useSearch from '@framework/product/use-search'
import rangeMap from '@lib/range-map'
import { filterQuery, getCategoryPath, useSearchMeta } from '@lib/search'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, ReactEventHandler, useState } from 'react'
// TODO (bc) : Remove or standarize this.
const SORT = Object.entries({
  featured: 'featured',
  'newest-in': 'newest in',
  'price-asc': 'Price Low to high',
  'price-desc': 'Price High to low',
})
// TODO (bc) : Remove or standarize this.
const MOTHERHOOD = Object.entries({
  pregnant: 'pregnant',
  nursing: 'nursing',
})
// TODO (bc) : Remove or standarize this.
const NUMBER_SIZE = ['6', '8', '10', '12', '14', '16']
const TEXT_SIZE = ['xs', 's', 'm', 'l']
interface Props {
  activeCategory: any
  categories: any[]
}

function Select({
  onToggle,
  open,
  title,
  placeholder,
  children,
}: {
  open: boolean
  title: string | ReactElement
  placeholder: string | ReactElement
  children: string | ReactElement
  onToggle: ReactEventHandler
}) {
  return (
    <div className="relative inline-block w-full">
      <div className="lg:hidden">
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={onToggle}
            className="flex justify-between w-full rounded-sm border border-gray-300 px-4 py-3 bg-white  font-medium hover:underline hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {placeholder}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="hidden lg:block">
        <div
          onClick={onToggle}
          className={cn(
            'flex space-x-3 justify-between py-2 px-3 lg:px-0 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none focus:bg-gray-100 focus:text-gray-900'
          )}
        >
          <a className={'block lg:inline-block header-2 uppercase'}>{title}</a>
          <button
            className={cn(
              'transform transition-transform  duration-300 ease-in-out',
              open ? '-rotate-180' : 'rotate-0'
            )}
          >
            <Down />
          </button>
        </div>
      </div>
      <div
        className={`lg:relative left-0 w-full rounded-md shadow-lg lg:shadow-none z-10 ${
          !open ? 'hidden' : ''
        }`}
      >
        <div className="rounded-sm bg-white shadow-xs lg:bg-none lg:shadow-none">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchView({ activeCategory, categories }: Props) {
  const router = useRouter()
  const { asPath } = router
  const { q, sort, size: currentSize, motherhood } = router.query
  // `q` can be included but because categories and designers can't be searched
  // in the same way of products, it's better to ignore the search input if one
  // of those is selected
  const query = filterQuery({ sort })
  const { pathname } = useSearchMeta(asPath)
  const searchData = useSearch({
    search: typeof q === 'string' ? q : '',
    // TODO: Shopify - Fix this type
    categoryId: activeCategory?.entityId as any,
    // TODO: Shopify - Fix this type
    sort: typeof sort === 'string' ? sort : '',
  })
  const [toggleFilter, setToggleFilter] = useState({
    categories: true,
    size: !!currentSize,
    sort: !!sort,
    motherhood: !!motherhood,
  })
  const sizeFilter = (product: Product, size: any) => {
    return !!product.options.find(({ displayName, values }) => {
      return (
        displayName.toLowerCase() === 'size' &&
        values.find((item) => item.label.toLowerCase() === size.toLowerCase())
      )
    })
  }
  const data = searchData.data
  const products = currentSize
    ? data?.products.filter((item) => sizeFilter(item, currentSize))
    : data?.products
  const handleClick = (event: any, filter: string) => {
    setToggleFilter({
      ...toggleFilter,
      [filter]: !(toggleFilter as any)[filter],
    })
  }
  console.log({ products })
  return (
    <div className="w-full grid grid-cols-12 gap-5 lg:gap-16 mb-20">
      <div className="col-span-12 lg:col-span-3 space-y-5 lg:space-y-2 order-1 lg:order-none lg:pr-8">
        <Select
          {...{
            placeholder: activeCategory?.name
              ? `Category: ${activeCategory?.name}`
              : 'All Categories',
            title: 'Categories',
            open: toggleFilter['categories'],
            onToggle: (e) => handleClick(e, 'categories'),
          }}
        >
          <ul>
            {categories.map((cat) => (
              <li
                key={cat.path}
                className={cn(
                  'block py-2 px-3 lg:px-0 tracking-widest text-h7 uppercase hover:underline hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                  {
                    'text-primary': activeCategory?.entityId === cat.entityId,
                  }
                )}
              >
                <Link
                  href={{
                    pathname: getCategoryPath(cat.path),
                    query,
                  }}
                >
                  <a className={'block lg:inline-block'}>{cat.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Select>
        <Select
          {...{
            placeholder: currentSize ? `Size: ${currentSize}` : 'All sizes',
            title: 'Size',
            open: toggleFilter['size'],
            onToggle: (e) => handleClick(e, 'size'),
          }}
        >
          <ul
            style={{
              gridTemplateRows: `repeat(${Math.max(
                NUMBER_SIZE.length,
                TEXT_SIZE.length
              )}, minmax(0, 1fr))`,
            }}
            className="lg:grid grid-cols-2 grid-flow-col grid-rows-6"
          >
            {NUMBER_SIZE.map((size) => (
              <li
                key={size}
                className={cn(
                  'block py-2 px-3 lg:px-0  text-h7 uppercase hover:underline hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                  {
                    // @ts-ignore Shopify - Fix this types
                    'text-primary': currentSize === size,
                  }
                )}
              >
                <Link
                  href={{
                    pathname,
                    query: filterQuery({
                      ...router.query,
                      size,
                    }),
                  }}
                >
                  <a className={'block lg:inline-block'}>{size}</a>
                </Link>
              </li>
            ))}
            {TEXT_SIZE.map((size) => (
              <li
                key={size}
                className={cn(
                  'block py-2 px-3 lg:px-0  text-h7 uppercase hover:underline hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                  {
                    // @ts-ignore Shopify - Fix this types
                    'text-primary': currentSize === size,
                  }
                )}
              >
                <Link
                  href={{
                    pathname,
                    query: {
                      ...router.query,
                      size,
                    },
                  }}
                >
                  <a className={'block lg:inline-block'}>{size}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Select>
        <Select
          {...{
            placeholder: activeCategory?.name
              ? `Motherhood: ${activeCategory?.name}`
              : 'Motherhood: all',
            title: 'Motherhood',
            open: toggleFilter['motherhood'],
            onToggle: (e) => handleClick(e, 'motherhood'),
          }}
        >
          <ul>
            <li
              className={cn(
                'block py-2 px-3 lg:px-0 tracking-widest text-h7 uppercase hover:underline hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                {
                  'text-primary': !motherhood,
                }
              )}
            >
              <Link
                href={{
                  pathname,
                  query: filterQuery({
                    ...router.query,
                    motherhood: undefined,
                  }),
                }}
              >
                <a className={'block lg:inline-block'}>all</a>
              </Link>
            </li>
            {MOTHERHOOD.map(([key, text]) => (
              <li
                key={key}
                className={cn(
                  'block py-2 px-3 lg:px-0 tracking-widest text-h7 uppercase hover:underline hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                  {
                    'text-primary': motherhood === key,
                  }
                )}
              >
                <Link
                  href={{
                    pathname,
                    query: {
                      ...router.query,
                      q: key,
                    },
                  }}
                >
                  <a className={'block lg:inline-block'}>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Select>
        <Select
          {...{
            placeholder: sort ? `Sort by: ${sort}` : 'Sort',
            title: 'Sort by',
            open: toggleFilter['sort'],
            onToggle: (e) => handleClick(e, 'sort'),
          }}
        >
          <ul>
            {SORT.map(([key, text]) => (
              <li
                key={key}
                className={cn(
                  'block py-2 px-3 lg:px-0  text-h7 uppercase hover:underline hover:bg-gray-100 lg:hover:bg-transparent focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                  {
                    'text-primary': sort === key,
                  }
                )}
              >
                <Link
                  href={{
                    pathname,
                    query: filterQuery({
                      ...router.query,
                      sort: key,
                    }),
                  }}
                >
                  <a className={'block lg:inline-block'}>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Select>
      </div>
      <div className="col-span-12 lg:col-span-9 order-3 lg:order-none">
        {(q || activeCategory) && (
          <div className="mb-12 transition ease-in duration-75">
            {data ? (
              <>
                <span
                  className={cn('animated', {
                    fadeIn: data.found,
                    hidden: !data.found,
                  })}
                >
                  Showing {products?.length || 0} results{' '}
                  {q && (
                    <>
                      for "<strong>{q}</strong>"
                    </>
                  )}
                </span>
                <span
                  className={cn('animated', {
                    fadeIn: !data.found,
                    hidden: data.found,
                  })}
                >
                  {q ? (
                    <>
                      There are no products that match "<strong>{q}</strong>"
                    </>
                  ) : (
                    <>
                      There are no products that match the selected category &
                      designer
                    </>
                  )}
                </span>
              </>
            ) : q ? (
              <>
                Searching for: "<strong>{q}</strong>"
              </>
            ) : (
              <>Searching...</>
            )}
          </div>
        )}
        <div>
          {data ? (
            <Grid layout="normal">
              {products?.map((product: Product, i) => (
                <ProductCard
                  variant="simple"
                  key={i}
                  size="small"
                  className="animated fadeIn"
                  product={product}
                  imgProps={{
                    width: 480,
                    height: 480,
                  }}
                />
              ))}
            </Grid>
          ) : (
            <Grid layout="normal">
              {rangeMap(12, (i) => (
                <Skeleton
                  key={i}
                  className="w-full animated fadeIn"
                  height={325}
                />
              ))}
            </Grid>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchView
