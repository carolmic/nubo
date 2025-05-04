import TableComponent from "../TableComponent/TableComponent";
import { transaction } from "@/types/transaction.ts";
import datasets from "@/mocks/transaction.json";

export const ContractedDatasetsList = () => {
  const columnNames: string[] = ["Name", "Description", "Details", "Price"];

  const getMonthName = (monthIndex: number) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
  };

  const groupedByMonth = datasets.reduce(
    (acc: { [key: string]: transaction[] }, dataset: transaction) => {
      const date = new Date(dataset.date);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(dataset);

      return acc;
    },
    {}
  );

  const monthsWithData = Object.keys(groupedByMonth).sort();

  return (
    <section
      className="w-align"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {monthsWithData.length === 0 ? (
        <p>Não há dados para exibir.</p>
      ) : (
        monthsWithData.map((monthYear) => {
          const transactions = groupedByMonth[monthYear];
          const [year, month] = monthYear.split("-");

          const total = transactions.reduce(
            (sum, tx) => sum + tx.price,
            0
          );

          const content = transactions.map((dataset) => ({
            name: dataset.name,
            description: dataset.description,
            details: (
              <a href="#" className="text-(--color-blue-300) underline">
                Details
              </a>
            ),
            price: dataset.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
            })
          }));

          return (
            <div key={monthYear} style={{ marginBottom: "30px", width: "80%" }}>
              <h3 className="text-xl font-bold text-(--color-blue-title) mb-2">
                {`${getMonthName(parseInt(month) - 1)}, ${year}`}
              </h3>

              <div
                style={{
                  padding: "10px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  width: "100%"
                }}
              >
                <TableComponent columnNames={columnNames} content={content} />
              </div>

              <div className="flex justify-end pr-4 pt-2">
                <span className="text-sm font-bold text-[#0b3a53]">
                  Total:{" "}
                  {total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </span>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};
