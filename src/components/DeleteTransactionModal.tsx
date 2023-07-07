'use client'

import { useModalContext } from '@/context/modalContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function DeleteTransactionModal() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { transaction } = useModalContext()

  async function handlerDeleteTransaction() {
    setIsLoading(true)
    await axios.delete(
      `https://transactions-api-rest-node.onrender.com/transactions/${transaction}`,
    )

    setIsLoading(false)
    router.refresh()
  }

  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Deletar transação</h3>
        <p className="py-4">Deseja apagar a transação permanentemente?</p>
        <button
          onClick={handlerDeleteTransaction}
          className="w-full rounded-lg bg-red-700 py-2 text-white transition-colors hover:bg-red-600"
        >
          {isLoading ? (
            <span className="loading loading-spinner text-white"></span>
          ) : (
            <p>Deletar</p>
          )}
        </button>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
