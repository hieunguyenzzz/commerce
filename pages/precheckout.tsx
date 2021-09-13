import { ForgotPassword, LoginView, SignUpView } from '@components/auth'
import { Layout } from '@components/common'
import { LoadingDots, useUI } from '@components/ui'
import { useCustomer } from '@framework/customer'
import commerce from '@lib/api/commerce'
import type { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  return {
    props: { pages, categories },
  }
} 
const AuthView: FC<{ modalView: string; closeModal(): any }> = ({
}) => {
  const {modalView} = useUI()
  return (
    <>
      {modalView === 'LOGIN_VIEW' && <LoginView />}
      {modalView === 'SIGNUP_VIEW' && <SignUpView />}
      {modalView === 'FORGOT_VIEW' && <ForgotPassword />}
    </>
  )
}

const AuthUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return <AuthView modalView={modalView} closeModal={closeModal} />
}
export default function Checkout() {
  const { setModalView,openModal,displayModal} = useUI()
  const router  = useRouter()
  const {data:customer,isLoading} = useCustomer()
  useEffect(() => {
    if(!isLoading){
      if(customer) {
        router.push('/checkout')
      }else{
        setModalView('LOGIN_VIEW')
      }
    }
  }, [customer,isLoading])
  return (
    <div className="flex w-full  fit justify-center items-center py-12">
      {isLoading||customer&&<LoadingDots/>}
      {
       !isLoading&&!customer&& <AuthUI/>
      }
    </div>
  )
}

Checkout.Layout = Layout
