import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "../ui/pagination";
import DatasetsTableRow from "./DatasetsTableRow";
import { useQuery } from "@tanstack/react-query";
import { getDataProductList } from "@/services/data_product/getDataProductList";
import { DataProduct } from "@/types/dataproduct";

const ITEMS_PER_PAGE = 12;

const DatasetsTable = () => {
	const [data, setData] = useState<DataProduct[]>([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
		{}
	);

	const { data: dataProducts } = useQuery({
		queryKey: ["dataProducts"],
		queryFn: getDataProductList,
	});

	useEffect(() => {
		if (dataProducts?.items) {
			setData(dataProducts.items); // <-- CORRIGIDO AQUI
			setTotalPages(Math.ceil(dataProducts.total / ITEMS_PER_PAGE));
		}
	}, [dataProducts]);

	const chunk = data.slice(
		currentPage * ITEMS_PER_PAGE,
		(currentPage + 1) * ITEMS_PER_PAGE
	);

	const toggleExpand = (index: number) => {
		setExpandedRows((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const changePage = (page: number) => {
		if (page != currentPage) {
			setCurrentPage(page);
			setExpandedRows({});
		}
	};

	return (
		<section className="w-align p-20 flex flex-col gap-7" id="datasetsTable">
			<Table className="rounded-2xl min-h-full overflow-hidden">
				<TableHeader className="bg-(--color-blue-300) [&>tr>th]:text-(--color-white) [&>tr>th]:font-bold [&>tr>th]:text-md [&>tr>th]:px-4 [&>tr>th]:py-1">
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Description</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Details</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{chunk.map((dataset, index) => (
						<DatasetsTableRow
							key={index}
							isPair={index % 2 == 0}
							name={dataset.id?.toString() ?? "No name"}
							desc={dataset.datasets?.id ?? "No category"}
							price={dataset.price}
							expanded={expandedRows[index] || false}
							toggleExpand={() => toggleExpand(index)}
						/>
					))}
				</TableBody>
			</Table>
			<Pagination>
				<PaginationContent className="gap-3">
					<PaginationItem>
						<PaginationPrevious
							className="text-(--color-blue-400)"
							href="#datasetsTable"
							onClick={() => changePage(Math.max(currentPage - 1, 0))}
						/>
					</PaginationItem>
					{Array.from({ length: totalPages }).map((_, index) => (
						<PaginationItem key={index}>
							<PaginationLink
								href="#datasetsTable"
								className={`font-extralight border-2 rounded-lg text-(--color-blue-400) 
                  ${
																			currentPage === index
																				? "bg-(--color-blue-200) text-(--color-white) hover:bg-(--color-blue-200) hover:text-(--color-white)"
																				: ""
																		}`}
								onClick={() => changePage(index)}
							>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						<PaginationNext
							className="text-(--color-blue-400)"
							href="#datasetsTable"
							onClick={() => changePage(Math.min(currentPage + 1, totalPages - 1))}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</section>
	);
};

export default DatasetsTable;
