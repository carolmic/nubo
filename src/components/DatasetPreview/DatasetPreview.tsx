import { Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableHead
 } from "../ui/table"

type DatasetPreviewProps = {
    content: object[],
    columnNames: string[],
}

const DatasetPreview = ({content, columnNames}: DatasetPreviewProps) => {
  return (
    <Table className="overflow-hidden border border-(--color-blue-50)">
        <TableHeader className="bg-(--color-gray-100)">
            <TableRow className="border-none">
                <TableHead className="border-r border-(--color-blue-50) w-10 px-2"></TableHead>
                {
                    columnNames.map((name) => (
                        <TableHead className="border-b border-(--color-blue-50) text-md font-semibold w-40 px-4 py-1">
                            {name}
                        </TableHead>
                    ))
                }
            </TableRow>
        </TableHeader>
        <TableBody>
                {
                    content.map((obj, key) => (
                        <TableRow className="bg-(--color-white) border-none">
                            <TableCell className="border-r border-(--color-blue-50) bg-(--color-gray-100) font-semibold text-center">
                                {key + 1}
                            </TableCell>
                            {
                                Object.values(obj).map((value, cellIndex) => (
                                <TableCell key={cellIndex} className="border-b border-(--color-blue-50) font-light text-xs py-2 px-4">
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

export default DatasetPreview