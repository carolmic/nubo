import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import MainBanner from "@/components/MainBanner/MainBanner";
import { ContractedDatasetsList } from "@/components/ContractedDatasetsList/ContractedDatasetsList";
import { useUser } from "@/contexts/UserContext";
import Unauthorized from "./Unauthorized";
import { Loader } from "@/components/Loader/Loader";

export const MyBusiness = () => {
	const { user, isLoading, error } = useUser();

	if (isLoading) {
		return <Loader />;
	}
	if (error) {
		return <Unauthorized />;
	}
	return (
		<div className="flex flex-col items-center h-screen overflow-x-hidden">
			<Header user={user} />
			<div className="flex flex-col items-center justify-start gap-8 w-align flex-1 pb-20">
				<MainBanner title="My Business" />
				<div className="flex justify-between items-start w-full pt-10 pb-0">
					<ContractedDatasetsList />
				</div>
			</div>
			<Footer />
		</div>
	);
};
