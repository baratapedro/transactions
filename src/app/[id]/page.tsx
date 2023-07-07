import axios from 'axios'
import { cookies } from 'next/headers'
import Link from 'next/link'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

interface TransactionDetailsProps {
  params: {
    id: string
  }
}

interface Transaction {
  id: string
  text: string
  amount: number
  created_at: string
  session_id: string
}

export default async function TransactionDetails({
  params,
}: TransactionDetailsProps) {
  const sessionId = cookies().get('sessionId')?.value
  const transactionId = params.id

  const response = await axios.get(
    `https://transactions-api-rest-node.onrender.com/transactions/${transactionId}`,
    {
      withCredentials: true,
      headers: {
        Cookie: `sessionId=${sessionId}`,
      },
    },
  )

  const transaction: Transaction = response.data.transaction
  const { amount } = transaction

  const formatedAmount = amount < 0 ? amount * -1 : amount

  return (
    <div>
      <Link
        href="/"
        className="font-medium text-gray-600 transition-colors hover:text-cyan-600"
      >
        Voltar
      </Link>
      <div className="mt-5 text-3xl font-semibold">{transaction.text}</div>

      <div className="text-sm text-gray-600">
        Criada em{' '}
        {dayjs(transaction.created_at).format(
          'DD [de] MMMM [de] YYYY [às] HH:mm:ss',
        )}
      </div>
      <div
        className={`${
          transaction.amount < 0 ? 'text-red-600' : 'text-green-500'
        } mt-20 w-full text-center text-7xl`}
      >
        R${formatedAmount.toFixed(2).replace('.', ',')}
      </div>
    </div>
  )
}
