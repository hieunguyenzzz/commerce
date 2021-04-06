import { Title } from '@components/common'
import { Input } from '@components/ui'
import React from 'react'
const Subscribe: React.FC = () => (
  <div className="flex flex-col space-y-5" data-testid="Subscribe">
    <div>
      <Title small>Join Our List</Title>
    </div>
    <div className="text-sm leading-loose inline ">
      Signup to be the first to hear about exclusive deals, special offers and
      upcoming collections
    </div>
    <div className="w-full flex space-x-3 border-b-2 border-accents-6 focus-within:border-accents-0 py-2">
      <Input
        className="flex-1 bg-transparent appearance-none focus:outline-none"
        type="email"
        placeholder="Your email address"
      ></Input>
      <button className="w-full focus:outline-none border-none bg-transparent appearance-none text-right inline">
        Subscribe
      </button>
    </div>
  </div>
)
export default Subscribe
