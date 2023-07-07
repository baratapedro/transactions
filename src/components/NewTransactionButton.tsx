'use client'

export function NewTransactionButton() {
  return (
    <button
      className="cursor-pointer font-medium text-gray-600 transition-colors hover:text-cyan-600"
      onClick={() => window.my_modal_1.showModal()}
    >
      Nova transação
    </button>
  )
}
