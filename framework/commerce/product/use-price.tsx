import { useMemo } from 'react'
import { useCommerce } from '..'

export function formatPrice({
  amount,
  currencyCode,
  locale,
}: {
  amount: number
  currencyCode: string
  locale: string
}) {
  try {
    const formatCurrency = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    })
    return formatCurrency.format(amount)
  } catch (error) {
    console.error(error)
    return 'Nan'
  }
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale,
  currencyDisplay,
}: {
  baseAmount: number
  amount: number
  currencyCode: string
  locale: string
  currencyDisplay?: string
}) {
  const hasDiscount = baseAmount > amount
  const formatDiscount = new Intl.NumberFormat(locale, { style: 'percent' })
  const discount = hasDiscount
    ? formatDiscount.format((baseAmount - amount) / baseAmount)
    : null

  const price = formatPrice({ amount, currencyCode, locale })
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale })
    : null

  return { price, basePrice, discount }
}

export default function usePrice(
  data?: {
    amount: number
    baseAmount?: number
    currencyCode: string
    currencyDisplay?: string
  } | null
) {
  const { amount, baseAmount, currencyCode, currencyDisplay } = data ?? {}
  const { locale } = useCommerce()
  const value = useMemo(() => {
    if (typeof amount !== 'number' || !currencyCode) return ''

    return baseAmount
      ? formatVariantPrice({
          amount,
          baseAmount,
          currencyCode,
          locale,
          currencyDisplay,
        })
      : formatPrice({ amount, currencyCode, locale })
  }, [amount, baseAmount, currencyCode, currencyDisplay])

  return typeof value === 'string' ? { price: value } : value
}
