'use client'

import { ModalProvider } from '@/context/modalContext'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>
}
