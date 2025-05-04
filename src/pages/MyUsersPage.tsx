import MainBanner from "@/components/MainBanner/MainBanner";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageTitle from "@/components/PageTitle/PageTitle";
import TableComponent from "@/components/TableComponent/TableComponent";
import { AddUserDialog } from "@/components/AddUserDialog/AddUserDialog";
import { useUser } from "@/contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getUsersByAccount } from "@/services/users/getUsersByAccount";
import Unauthorized from "./Unauthorized";
import { User } from "@auth0/auth0-react";
import { Trash2 } from "lucide-react";
import { Loader } from "@/components/Loader/Loader";

export const MyUsersPage = () => {
	const { user } = useUser();
	const {
		data: users,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["users"],
		queryFn: () => getUsersByAccount(user?.account_id || ""),
	});

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <Unauthorized />;
	}

	const handleDelete = (name: string) => {
		console.log("Deletar", name);
	};

	const mockColumns = ["Name", "Username", "Email", ""];
	const content = users.map((item: User) => ({
		Name: item.name,
		Username: item?.email?.split("@")[0],
		Email: item.email,
		Ações: (
			<div className="flex justify-end pr-10">
				<button
					onClick={() => handleDelete(item.Name)}
					className="text-red-600 cursor-pointer"
					aria-label={`Delete ${item.Name}`}
				>
					<Trash2 size={22} />
				</button>
			</div>
		),
	}));

	return (
		<div className="flex flex-col items-center h-screen overflow-x-hidden">
			<Header user={user} />
			<div className="flex flex-col items-center justify-start gap-8 w-align flex-1 pb-60">
				<MainBanner title="My Users" />
				<div className="flex justify-between items-start w-full pt-10 pb-0">
					<PageTitle title="Active Users" />
					<AddUserDialog />
				</div>
				<TableComponent columnNames={mockColumns} content={content} />
			</div>
			<Footer />
		</div>
	);
};
