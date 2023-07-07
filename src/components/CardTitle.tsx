import { ArrowDownCircle, ArrowUpCircle, CircleDollarSign } from 'lucide-react'

interface CardTitleProps {
  type: 'credit' | 'debit' | 'total'
}

export function CardTitle({ type }: CardTitleProps) {
  if (type === 'credit') {
    return (
      <>
        <p className="font-medium ">Entradas</p>
        <ArrowUpCircle width={40} height={40} className="text-green-500" />
      </>
    )
  }

  if (type === 'debit') {
    return (
      <>
        <p className="font-medium ">Saídas</p>
        <ArrowDownCircle width={40} height={40} className="text-red-600" />
      </>
    )
  }

  if (type === 'total') {
    return (
      <>
        <p className="font-medium ">Total</p>
        <CircleDollarSign width={40} height={40} className="text-white" />
      </>
    )
  }
}
