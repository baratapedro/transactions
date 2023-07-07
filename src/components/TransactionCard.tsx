import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import Link from 'next/link'
import { DeleteTransactionButton } from './DeleteTransactionButton'

interface Transaction {
  id: string
  text: string
  amount: number
  createdAt: string
  session_id: string
}

interface TransactionCardProps {
  transaction: Transaction
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  const { amount } = transaction
  const formatedAmount = amount < 0 ? amount * -1 : amount

  return (
    <div className="flex w-full gap-5 rounded-lg bg-gray-50 p-5 transition-colors hover:bg-white">
      <Link
        href={`/${transaction.id}`}
        className="flex w-full items-center justify-between gap-5"
      >
        <div className="flex w-full">
          <p className="flex-1 font-medium">{transaction.text}</p>
          <div className="flex w-[120px] items-center gap-5">
            {transaction.amount > 0 ? (
              <ArrowUpCircle
                width={30}
                height={30}
                className="text-green-600"
              />
            ) : (
              <ArrowDownCircle
                width={30}
                height={30}
                className="text-red-700"
              />
            )}
            <p
              className={`${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-700'
              }`}
            >
              R$
              {formatedAmount.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      </Link>
      <DeleteTransactionButton transactionId={transaction.id} />
    </div>
  )
}
