import { Button } from '@components/ui'
import { useUI } from '@components/ui/context'
import useSignup from '@framework/auth/use-signup'
import { validate } from 'email-validator'
import { FC, useCallback, useEffect, useState } from 'react'
import { Input } from './Form'
import { handleOnInputChange } from './Form/helpers'

interface Props {}

const KeepInTouch: FC<{ onNothank: () => void }> = ({ onNothank }) => {
  const [email, setEmail] = useState('')
  const [acceptsMarketing, setacceptsMarketing] = useState(false)
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
        acceptsMarketing,
      })
      setLoading(false)
      closeModal()
    } catch ({ errors }) {
      setMessage(errors[0].message)
      setLoading(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    // if (dirty) {
    //   setDisabled(!validate(email) || password.length < 7 || !validPassword)
    // }
    if (dirty) {
      setDisabled(!validate(email))
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSignup}
        className="w-full flex flex-col justify-between"
      >
        <div className="pb-[30px] lg:pb-12 text-center ">
          <h4 className="text-[20px] lg:text-h4">KEEP IN TOUCH</h4>
          <div className="mt-5 text-[14px]">
            Subcribe to our newsletter to receive 10% your first order and be
            the first to hear about lasted news and offer latest news and
            offers.
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-8">
          <Input
            required
            placeholder="First Name"
            onChange={handleOnInputChange(setFirstName)}
          />
          <Input
            required
            placeholder="Last Name"
            onChange={handleOnInputChange(setLastName)}
          />
          <Input
            required
            type="email"
            placeholder="Email address"
            onChange={handleOnInputChange(setEmail)}
          />
          <Input
            required
            placeholder="Birthday"
            onChange={handleOnInputChange(setPassword)}
          />
        </div>
        <div className="space-y-3 flex flex-col mt-10">
          <Button
            className="block w-full"
            type="submit"
            loading={loading}
            disabled={disabled}
          >
            SUBCRIBE
          </Button>
          <Button variant="ghost" className="block w-full" onClick={onNothank}>
            NO THANKS
          </Button>
        </div>
      </form>
    </div>
  )
}

export default KeepInTouch
