import React, { FC, useMemo } from 'react'
export interface Props {
  initialValues?: {
    navigation: {
      title: string
      url: string
    }[]
    [key: string]: any
  }
}
export interface State {
  navigation: {
    title: string
    url: string
  }[]
  [key: string]: any
}

const initialState = {}

export const DATAContext = React.createContext<State | any>(initialState)

DATAContext.displayName = 'DATAContext'

export const DATAProvider: FC<Props> = ({ initialValues = {}, ...props }) => {
  const value = useMemo(
    () => ({
      ...initialValues,
    }),
    [initialValues]
  )

  return <DATAContext.Provider value={value} {...props} />
}

export const useDATA: () => State = () => {
  const context = React.useContext(DATAContext)
  if (context === undefined) {
    throw new Error(`useDATA must be used within a DATAProvider`)
  }
  return context
}

export const ManagedDATAContext: FC<Props> = ({ children, ...props }) => (
  <DATAProvider {...props}>{children}</DATAProvider>
)
