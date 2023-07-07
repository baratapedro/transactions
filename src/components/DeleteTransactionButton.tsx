'use client'

import { useModalContext } from '@/context/modalContext'
import { Trash } from 'lucide-react'

interface DeleteTransactionButtonProps {
  transactionId: string
}

export function DeleteTransactionButton({
  transactionId,
}: DeleteTransactionButtonProps) {
  const { handlerSetTransaction } = useModalContext()

  function handlerDeleteTransaction() {
    handlerSetTransaction(transactionId)

    window.my_modal_2.showModal()
  }

  return (
    <>
      <button onClick={handlerDeleteTransaction}>
        <Trash
          width={20}
          height={20}
          className="cursor-pointer text-gray-700 transition-colors hover:text-gray-600"
        />
      </button>
    </>
  )
}
