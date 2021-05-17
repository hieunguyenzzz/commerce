import { Breadcrumb } from '@components/common'
import { Button, Text } from '@components/ui'
import useRecover from '@framework/auth/use-recover'
import { validate } from 'email-validator'
import Link from 'next/link'
import { FC, useCallback, useEffect, useState } from 'react'
import { Input } from './Form'
import { handleOnInputChange } from './Form/helpers'
import Layout from './Layout'

interface Props {}

const LoginView: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const recovery = useRecover()

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await recovery({
        email,
      })
      setLoading(false)
    } catch ({ errors }) {
      setMessage(errors[0].message)
    } finally {
      setLoading(false)
      setDisabled(false)
    }
  }

  const handleValidation = useCallback(() => {
    if (dirty) {
      setDisabled(!validate(email))
    }
  }, [email, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <div className="pt-md w-full">
          <Breadcrumb>ACCOUNT/ SIGN IN</Breadcrumb>
        </div>

        <form
          onSubmit={handleLogin}
          className="max-w-sm w-full flex flex-col justify-between"
        >
          <div className="flex justify-center py-12">
            <Text variant="h4">sign in</Text>
          </div>
          <div className="flex flex-col space-y-8">
            {message && (
              <div className="text-red border border-red p-3">
                {message}. Did you {` `}
                <a className="text-accent-9 inline font-bold hover:underline cursor-pointer">
                  forgot your password?
                </a>
              </div>
            )}
            <Input
              required
              type="email"
              placeholder="Recovery Email address"
              onChange={handleOnInputChange(setEmail)}
            />
            <div className="space-y-2 flex flex-col">
              <Button
                className="block w-full"
                type="submit"
                loading={loading}
                disabled={disabled}
              >
                Send
              </Button>
            </div>
            <div className="space-y-2 flex flex-col">
              <span className="text-accents-7 uppercase font-montserrat text-xs">
                NOT REGISTERED?
              </span>
              <Link href="/account/register">
                <Button secondary className="block w-full">
                  REGISTER NOW
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LoginView
