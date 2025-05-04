import { TableRow, TableCell } from "../ui/table"
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import DropdownArrow from '@/assets/dropdownArrow.svg'

type RowProps = {
  name: string
  desc: string
  price: number
  expanded: boolean
  isPair: boolean
  toggleExpand: () => void
}

const DatasetsTableRow = ({ name, desc, price, expanded, isPair, toggleExpand }: RowProps) => {
  return (
    <TableRow
      className={`[&>td]:px-4 [&>td]:py-2 [&>td]:align-top  ${isPair ? 'bg-(--color-white)' : 'bg-(--color-gray-200)'}`}
    >
      <TableCell className="text-(--color-blue-200)">{name}</TableCell>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <TableCell className={`${expanded ? "whitespace-normal" : "overflow-hidden text-ellipsis"} max-w-150 h-fit text-left`}>
              {desc}
            </TableCell>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-150 text-center">{desc}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TableCell>{price.toLocaleString('pt-br', { style: 'currency', currency: "USD" })}</TableCell>
      <TableCell className="text-(--color-blue-200) cursor-pointer">
        <a href="#">Details</a>
      </TableCell>
      <TableCell onClick={toggleExpand}>
        <img src={DropdownArrow} className={`${expanded ? "rotate-0" : "rotate-90"} transition-all`} />
      </TableCell>
    </TableRow>
  )
}

export default DatasetsTableRow
