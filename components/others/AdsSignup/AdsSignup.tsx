import { Button, Text } from '@components/ui'
import { FC } from 'react'
interface Props {
  title?: string
  content?: string
}
const AdsSignupView: FC<Props> = ({
  title = '10% OFF YOUR FIRST ORDER',
  content = `Sign up to receive 10% your first order and be the first to hear
  about latest news and offers.`,
}) => {
  return (
    <div className="max-w-prose flex flex-col items-center text-center space-y-5 mx-auto">
      <Text variant="h3">{title}</Text>
      <div className="text-lg whitespace-pre-line text-body-2">{content}</div>
      <Button>sign up</Button>
    </div>
  )
}

export default AdsSignupView
