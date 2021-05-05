import { Product } from '@commerce/types'
import { SidebarLayout } from '@components/common'
import { Down } from '@components/icons'
import { ProductCard } from '@components/product'
import { Grid, Sidebar, Skeleton, useUI } from '@components/ui'
import useSearch from '@framework/product/use-search'
import rangeMap from '@lib/range-map'
import { filterQuery, getCategoryPath, useSearchMeta } from '@lib/search'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ReactElement,
  ReactEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react'
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
      <div className="block">
        <div
          onClick={onToggle}
          className={cn(
            'flex space-x-3 justify-between py-2 px-0 text-base no-underline font-bold tracking-wide  focus:outline-none focus:bg-gray-100 focus:text-gray-900'
          )}
        >
          <a className={'block xl:inline-block header-2 uppercase'}>{title}</a>
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
        className={`relative left-0 w-full rounded-md  z-10 ${
          !open ? 'hidden' : ''
        }`}
      >
        <div className="rounded-sm">
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
const Filter = ({
  activeCategory,
  handleClick,
  categories,
  router,
  currentSize,
  motherhood,
  sort,
  toggleFilter,
}: {
  activeCategory: any
  handleClick: any
  categories: any[]
  router: any
  currentSize: any
  motherhood: any
  sort: any
  toggleFilter: any
}) => {
  return (
    <>
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
                'block py-2 px-0 tracking-widest text-h7 uppercase hover:underline focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                {
                  'text-primary': activeCategory?.entityId === cat.entityId,
                }
              )}
            >
              <Link
                href={{
                  pathname: getCategoryPath(cat.path),
                  query: router.query,
                }}
              >
                <a className={'inline-block'}>{cat.name}</a>
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
          className="grid grid-cols-2 grid-flow-col grid-rows-6"
        >
          {NUMBER_SIZE.map((size) => (
            <li
              key={size}
              className={cn(
                'block py-2 px-0  text-h7 uppercase hover:underline  focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                {
                  // @ts-ignore Shopify - Fix this types
                  'text-primary': currentSize === size,
                }
              )}
            >
              <Link
                href={{
                  pathname: router.pathname,
                  query: filterQuery({
                    ...router.query,
                    size,
                  }),
                }}
              >
                <a className={'inline-block'}>{size}</a>
              </Link>
            </li>
          ))}
          {TEXT_SIZE.map((size) => (
            <li
              key={size}
              className={cn(
                'block py-2 px-0  text-h7 uppercase hover:underline xl: focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                {
                  // @ts-ignore Shopify - Fix this types
                  'text-primary': currentSize === size,
                }
              )}
            >
              <Link
                href={{
                  pathname: router.pathname,
                  query: {
                    ...router.query,
                    size,
                  },
                }}
              >
                <a className={'inline-block'}>{size}</a>
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
              'block py-2 px-0 tracking-widest text-h7 uppercase hover:underline xl: focus:outline-none focus:bg-gray-100 focus:text-gray-900',
              {
                'text-primary': !motherhood,
              }
            )}
          >
            <Link
              href={{
                pathname: router.pathname,
                query: filterQuery({
                  ...router.query,
                  motherhood: undefined,
                }),
              }}
            >
              <a className={'inline-block'}>all</a>
            </Link>
          </li>
          {MOTHERHOOD.map(([key, text]) => (
            <li
              key={key}
              className={cn(
                'block py-2 px-0 tracking-widest text-h7 uppercase hover:underline xl: focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                {
                  'text-primary': motherhood === key,
                }
              )}
            >
              <Link
                href={{
                  pathname: router.pathname,
                  query: {
                    ...router.query,
                    q: key,
                  },
                }}
              >
                <a className={'inline-block'}>{text}</a>
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
                'block py-2 px-0  text-h7 uppercase hover:underline xl: focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                {
                  'text-primary': sort === key,
                }
              )}
            >
              <Link
                href={{
                  pathname: router.pathname,
                  query: filterQuery({
                    ...router.query,
                    sort: key,
                  }),
                }}
              >
                <a className={'inline-block'}>{text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Select>
    </>
  )
}
const SearchSidebar: React.FC<{
  children: ReactNode
  title?: string
  currentTag?: string
}> = ({ children, title = 'SHOP' }) => {
  const { displaySidebar, closeSidebar, modalView, setModalView } = useUI()
  useEffect(() => {
    setModalView('SEARCH')
  }, [])
  return (
    <Sidebar
      position="left"
      open={displaySidebar && modalView === 'SEARCH'}
      onClose={closeSidebar}
    >
      <SidebarLayout title={title}>{children}</SidebarLayout>
    </Sidebar>
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
    size: true || !!currentSize,
    sort: true || !!sort,
    motherhood: true || !!motherhood,
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
  const filterNode = (
    <Filter
      {...{
        activeCategory,
        handleClick,
        categories,
        router,
        currentSize,
        motherhood,
        sort,
        toggleFilter,
      }}
    />
  )
  return (
    <>
      <SearchSidebar>
        <div className="space-y-6">{filterNode}</div>
      </SearchSidebar>
      <div className="w-full xl:grid grid-cols-12 gap-5 xl:gap-16 mb-20">
        <div className="hidden xl:block xl:col-span-3 space-y-6 order-1 xl:order-none xl:pr-8">
          {filterNode}
        </div>
        <div className="xl:col-span-9 order-3 xl:order-none">
          {(q || activeCategory) && (
            <div className="mb-6 transition ease-in duration-75">
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
    </>
  )
}

export default SearchView
