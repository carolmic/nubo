import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DatasetsTable from "./DatasetsTable";
import datasets from "@/mocks/datasets.json";

const ITEMS_PER_PAGE = 12;

// Transform mock data to match component's expected structure
const transformedDatasets = datasets.map((dataset, index) => ({
	id: index + 1,
	datasets: {
		id: dataset.desc,
	},
	price: dataset.price,
}));

// Mock data for the data products query
const mockDataProducts = {
	items: transformedDatasets,
	total: transformedDatasets.length,
};

// Create a new QueryClient for each test
const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

describe("DatasetsTable", () => {
	let queryClient: QueryClient;

	beforeEach(() => {
		queryClient = createTestQueryClient();
		// Set mock data for the data products query
		queryClient.setQueryData(["dataProducts"], mockDataProducts);
		render(
			<QueryClientProvider client={queryClient}>
				<DatasetsTable />
			</QueryClientProvider>
		);
	});

	afterEach(() => {
		cleanup();
		queryClient.clear();
	});

	it("renders table headers correctly", () => {
		expect(screen.getAllByText("Name")).not.toBeNull();
		expect(screen.getAllByText("Description")).not.toBeNull();
		expect(screen.getAllByText("Price")).not.toBeNull();
		expect(screen.getAllByText("Details")).not.toBeNull();
	});

	it("renders the correct number of rows per page", () => {
		const rows = screen
			.getAllByRole("row")
			.filter((row) => row.parentElement?.nodeName === "TBODY").length;
		expect(rows).toBeLessThanOrEqual(ITEMS_PER_PAGE);
	});

	it("navigates to the next page", () => {
		const nextButton = screen.getByRole("link", { name: /next/i });
		fireEvent.click(nextButton);

		const firstDatasetOnNextPage =
			transformedDatasets[ITEMS_PER_PAGE].id.toString();
		expect(screen.getAllByText(firstDatasetOnNextPage)).not.toBeNull();
	});

	it("expands and collapses a row when clicking details", () => {
		const detailsButtons = screen.getAllByText("Details");
		fireEvent.click(detailsButtons[0]);

		expect(
			screen.queryAllByText(transformedDatasets[0].datasets.id).length
		).toBeGreaterThan(0);
	});
});
