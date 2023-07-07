import { ReactNode, createContext, useContext, useState } from 'react'

interface ModalContextProps {
  transaction: string
  handlerSetTransaction: (transaction: string) => void
}

const ModalContext = createContext({} as ModalContextProps)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [transaction, setTransaction] = useState('')

  function handlerSetTransaction(transaction: string) {
    setTransaction(transaction)
  }

  return (
    <ModalContext.Provider value={{ transaction, handlerSetTransaction }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
