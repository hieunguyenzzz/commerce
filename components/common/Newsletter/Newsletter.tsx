import React, { useState } from 'react'

interface NewsletterProps {}

const Newsletter: React.FC<NewsletterProps> = ({}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('COMING SOON')
  }

  const [email, setEmail] = useState<string>('')

  return (
    <div className="flex lg:px-12 mx-auto justify-between flex-wrap md:container mx-auto">
      <div className="pl-3">
        <h2 className="font-bold text-5xl">Our Newsletter</h2>
        <hr className="w-4/12 border-t-4 my-2 border-primary-new" />
      </div>
      <div className="flex pr-3">
        <form onSubmit={handleSubmit}>
          <div className="rounded-lg">
            <div className="flex justify-between ">
              <input
                type="email"
                className="m-1 mr-0 p-3 appearance-none text-gray-700 bg-gray-100 w-42 md:w-72 lg:w-96	 text-sm focus:outline-none "
                placeholder="Your email address"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setEmail(ev.target.value)
                }
              />
              <button
                className="w-full ml-0 m-1 p-3 text-sm text-white bg-black font-semibold  lg:w-auto"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>{' '}
        </form>
      </div>
    </div>
  )
}

export default Newsletter
