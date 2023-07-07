import { EmptyTransactions } from '@/components/EmptyTransactions'
import { NewTransactionButton } from '@/components/NewTransactionButton'
import { TransactionCard } from '@/components/TransactionCard'
import axios from 'axios'
import { cookies } from 'next/headers'

interface Transaction {
  id: string
  text: string
  amount: number
  createdAt: string
  session_id: string
}

export default async function Home() {
  const sessionId = cookies().get('sessionId')?.value

  let transactions: Transaction[] = []

  if (sessionId) {
    const response = await axios.get(
      `https://transactions-api-rest-node.onrender.com/transactions`,
      {
        withCredentials: true,
        headers: {
          Cookie: `sessionId=${sessionId}`,
        },
      },
    )

    transactions = response.data.transactions
  }

  return (
    <>
      <div className="p-5">
        <NewTransactionButton />
      </div>
      {transactions.length > 0 ? (
        <div className="flex flex-col gap-3">
          {transactions.map((transaction) => {
            return (
              <TransactionCard key={transaction.id} transaction={transaction} />
            )
          })}
        </div>
      ) : (
        <EmptyTransactions />
      )}
    </>
  )
}
