import { Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableHead
 } from "../ui/table"

type TableProps = {
    content: object[],
    columnNames: string[],
}

const TableComponent = ({content, columnNames}: TableProps) => {
  return (
    <Table className="rounded-2xl overflow-hidden">
        <TableHeader className="bg-(--color-blue-300) [&>tr>th]:text-(--color-white) [&>tr>th]:font-bold [&>tr>th]:text-md [&>tr>th]:px-4 [&>tr>th]:py-1">
            <TableRow>
                {
                    columnNames.map((name) => (
                        <TableHead>
                            {name}
                        </TableHead>
                    ))
                }
            </TableRow>
        </TableHeader>
        <TableBody>
                {
                    content.map((obj, key) => (
                        <TableRow className={`[&>td]:px-4 [&>td]:py-2 [&>td]:align-top  ${key%2 == 0 ? 'bg-(--color-white)' : 'bg-(--color-gray-200)'}`}>
                            {
                                Object.values(obj).map((value, cellIndex) => (
                                <TableCell key={cellIndex}>
                                    {value as React.ReactNode}
                                </TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                }
        </TableBody>
    </Table>
  )
}

export default TableComponent