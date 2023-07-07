import { CardTitle } from './CardTitle'

interface CardProps {
  type: 'credit' | 'debit' | 'total'
  amount: number
}

export function Card({ type, amount }: CardProps) {
  const formatedAmount = amount < 0 && type !== 'total' ? amount * -1 : amount

  return (
    <div
      className={`flex h-40 w-full flex-col justify-between rounded-lg p-7 shadow-lg ${
        type === 'total'
          ? amount >= 0
            ? 'bg-green-600 text-white'
            : 'bg-red-700 text-white'
          : 'bg-slate-50 p-7 text-zinc-900'
      } `}
    >
      <div className="flex w-full items-center justify-between">
        <CardTitle type={type} />
      </div>
      <div className="text-4xl">
        R$
        {formatedAmount ? formatedAmount.toFixed(2).replace('.', ',') : 0}
      </div>
    </div>
  )
}
