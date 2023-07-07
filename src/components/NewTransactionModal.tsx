'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function NewTransactionModal() {
  const router = useRouter()

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handlerAddNewTransaction(event: FormEvent) {
    event.preventDefault()

    setIsLoading(true)

    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/transactions`,
        {
          text,
          amount: Number(amount),
        },
        {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      .then(() => {
        window.my_modal_1.close()
        setIsLoading(false)
        setText('')
        setAmount('')
        router.refresh()
      })
  }

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <form
          onSubmit={handlerAddNewTransaction}
          method="dialog"
          className="modal-box bg-gray-100"
        >
          <h3 className="text-lg font-bold">Nova transação</h3>
          <div className="mt-5 flex flex-col gap-3">
            <input
              type="text"
              className="w-full rounded-lg px-5 py-3 text-gray-800 focus:outline-none"
              placeholder="Descrição"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />

            <div>
              <input
                type="number"
                step={0.01}
                className="w-full rounded-lg px-5 py-3 text-gray-800 focus:outline-none"
                placeholder="0,00"
                onChange={(event) => setAmount(event.target.value)}
                value={amount}
              />
              <p className="p-1 text-xs text-gray-600">
                Use o sinal negativo (-) para despesas
              </p>
            </div>
          </div>
          <div className="mt-5">
            <button
              className="flex h-12 w-full items-center justify-center rounded-lg bg-green-700 text-center text-white transition-colors hover:bg-green-600"
              type="submit"
            >
              {isLoading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                <p>Confirmar</p>
              )}
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
