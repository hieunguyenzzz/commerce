// import SignupAllProductsGrid from '@components/common/SignupAllProductsGrid'

import AuthWrap from '@components/common/AuthWrap'
import Link from '@components/common/Link'
import { useUI } from '@components/ui/context'
import classNames from 'classnames'
import { validate } from 'email-validator'
import { useSignup } from 'framework/local/auth'
import React, { useCallback, useEffect, useState } from 'react'
import logoImage from '../../profile-html-templates/atis-assets/logo/atis/atis-mono-black.svg'
export function SignupView({
  handleSignup,
  message,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  loading,
  disabled,
  setModalView,
}: {
  handleSignup: (e: React.SyntheticEvent<EventTarget>) => Promise<void>
  message: string
  setFirstName: any
  setLastName: any
  setEmail: any
  setPassword: any
  loading: boolean
  disabled: boolean
  setModalView: any
}) {
  return (
    <div>
      <section
        className={classNames('py-10 lg:py-20 bg-gray-50 min-h-screen', {
          'opacity-25 pointer-events-none': loading,
        })}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="mb-10">
              <Link className="text-3xl font-bold leading-none" href="/">
                <img
                  className="h-12 mx-auto"
                  src={logoImage.src}
                  width="auto"
                />
              </Link>
            </div>
            {message && (
              <div className="text-red border border-red p-3 mb-6">
                {message}. Did you {` `}
                <a
                  className="text-accent-9 inline font-bold hover:underline cursor-pointer "
                  onClick={() => setModalView('FORGOT_VIEW')}
                >
                  forgot your password?
                </a>
              </div>
            )}
            <div className="p-6 lg:p-12 mb-6 bg-white shadow rounded">
              <div className="mb-6">
                <span className="text-gray-500">Sign Up</span>
                <h3 className="text-2xl font-bold">Create an account</h3>
              </div>
              <form>
                <div className="flex flex-wrap -mx-2">
                  <div className="mb-3 w-full lg:w-1/2 px-2">
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value)
                      }}
                      className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-3 w-full lg:w-1/2 px-2">
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value)
                      }}
                      className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-3 flex p-4 bg-gray-50 rounded">
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    className="w-full text-xs bg-gray-50 outline-none"
                    type="email"
                    placeholder="name@email.com"
                  />
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <div className="mb-6 flex p-4 bg-gray-50 rounded">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    className="w-full text-xs bg-gray-50 outline-none"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button>
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleSignup}
                    type="submit"
                    className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                  >
                    Sign Up
                  </button>
                  <span className="text-gray-400 text-xs">
                    <span>Already have an account?</span>
                    <Link
                      className="text-green-600 hover:underline"
                      href="/login"
                    >
                      Sign In
                    </Link>
                  </span>
                </div>
              </form>
            </div>
            <p className="text-xs text-center text-gray-400">
              <a className="underline hover:text-gray-500" href="#">
                Policy privacy
              </a>{' '}
              and{' '}
              <a className="underline hover:text-gray-500" href="#">
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

const Signup = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const signup = useSignup()
  const { setModalView, closeModal } = useUI()

  const handleSignup = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    e.stopPropagation()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await signup({
        email,
        firstName,
        lastName,
        password,
      })
      setLoading(false)
      closeModal()
    } catch (e: any) {
      console.error(e)
      setMessage(e?.errors?.[0].message)
      setLoading(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <SignupView
      {...{
        handleSignup,
        message,
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        loading,
        disabled,
        setModalView,
      }}
    />
  )
}
export default Signup
Signup.Layout = AuthWrap
