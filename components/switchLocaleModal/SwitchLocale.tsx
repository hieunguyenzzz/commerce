import { Button, Text } from '@components/ui'
import { getCurrentLocale } from '@lib/locale'
import React from 'react'
const SwitchLocale: React.FC<any> = ({
  fromCurrencyCode,
  toCurrencyCode,
  onSubmit,
  onClose,
}) => {
  const fromCurrentLocale = getCurrentLocale(fromCurrencyCode)
  const toCurrentLocale = getCurrentLocale(toCurrencyCode)
  return (
    <div
      className="py-6  flex flex-col items-center space-y-6"
      data-testid="SwithLocale"
    >
      <div>
        <Text variant="h2">TESSJEAN</Text>
      </div>
      <Text variant="body" className="text-center max-w-md mx-auto">
        You are currently shopping on the {fromCurrentLocale.name} store. Are
        you sure you want to go to the International store
      </Text>
      <div className="flex-1 w-full flex flex-col items-center space-y-3">
        <Button onClick={onSubmit} className="block w-full">
          Continue to {toCurrentLocale.name}
        </Button>
        <div>or</div>
        <Button onClick={onClose} className="block w-full">
          Stay in {fromCurrentLocale.name}
        </Button>
      </div>
    </div>
  )
}
export default SwitchLocale
