import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BannerCatalogue from "@/components/BannerCatalogue/BannerCatalogue";
import DatasetsTable from "@/components/DatasetsTable/DatasetsTable";
import { useUser } from "@/contexts/UserContext";
import Unauthorized from "./Unauthorized";
import { Loader } from "@/components/Loader/Loader";
export const DatasetsPage = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <Unauthorized />;
	}

	return (
		<div className="flex flex-col items-center h-screen overflow-x-hidden">
			<Header user={user} />
			<div className="flex flex-col items-center gap-4">
				<BannerCatalogue />
				<DatasetsTable />
			</div>
			<Footer />
		</div>
	);
};

export default DatasetsPage;
