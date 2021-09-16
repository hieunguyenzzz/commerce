// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import AuthWrap from '@components/common/AuthWrap'
import { useUI } from '@components/ui/context'
import { useLogin } from '@framework/auth'
import classNames from 'classnames'
import { validate } from 'email-validator'
import { useCallback, useEffect, useState } from 'react'
import logoImage from '../../profile-html-templates/atis-assets/logo/atis/atis-mono-black.svg'
import faImage from '../../profile-html-templates/atis-assets/social/facebook-logo.png'
import goimage from '../../profile-html-templates/atis-assets/social/google-logo.png'
function LoginView({
  handleLogin,
  message,
  setModalView,
  setEmail,
  setPassword,
  loading,
  disabled,
}: {
  handleLogin: (e: React.SyntheticEvent<EventTarget>) => Promise<void>
  message: string
  setModalView: any
  setEmail: any
  setPassword: any
  loading: boolean
  disabled: boolean
}) {
  return (
    <div onSubmit={handleLogin}>
      <section
        className={classNames('py-10 lg:py-20 bg-gray-50 min-h-screen', {
          'opacity-25 pointer-events-none': loading,
        })}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="mb-10">
              <a className="text-3xl font-bold leading-none" href="#">
                <img
                  className="h-12 mx-auto"
                  src={logoImage.src}
                  width="auto"
                />
              </a>
            </div>
            {message && (
              <div className="text-red border border-red p-3">
                {message}. Did you {` `}
                <a
                  className="text-accent-9 inline font-bold hover:underline cursor-pointer"
                  onClick={() => setModalView('FORGOT_VIEW')}
                >
                  forgot your password?
                </a>
              </div>
            )}
            <div className="mb-6 lg:mb-10 p-6 lg:p-12 bg-white shadow rounded">
              <div className="mb-6">
                <span className="text-gray-500">Sign In</span>
                <h3 className="text-2xl font-bold">Join our community</h3>
              </div>
              <form>
                <div className="mb-3 flex p-4 bg-gray-50 rounded">
                  <input
                    className="w-full text-xs bg-gray-50 outline-none"
                    type="email"
                    placeholder="name@email.com"
                    onChange={(e) => setEmail(e.target.value)}
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
                    className="w-full text-xs bg-gray-50 outline-none"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
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
                    type="submit"
                    className="mb-4 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50"
                  >
                    Sign In
                  </button>
                  <a
                    className="text-xs text-green-600 hover:underline"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </a>
                  <a
                    className="mt-8 mb-4 p-4 flex justify-center items-center border rounded hover:bg-gray-50"
                    href="#"
                  >
                    <img className="mr-4" src={faImage.src} />
                    <span className="text-xs text-gray-500 font-bold">
                      Sign In with Facebook
                    </span>
                  </a>
                  <a
                    className="p-4 flex justify-center items-center border rounded hover:bg-gray-50"
                    href="#"
                  >
                    <img className="mr-4" src={goimage.src} />
                    <span className="text-xs text-gray-500 font-bold">
                      Sign In with Google
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
const Login = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { setModalView, closeModal } = useUI()

  const login = useLogin()

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await login({
        email,
        password,
      })
      setLoading(false)
      closeModal()
    } catch ({ errors }) {
      // setMessage(errors?.[0].message)
      setLoading(false)
      setDisabled(false)
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
    <LoginView
      {...{
        handleLogin,
        message,
        setModalView,
        setEmail,
        setPassword,
        loading,
        disabled,
      }}
    />
  )
}

export default Login
Login.Layout = AuthWrap
