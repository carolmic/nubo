import { RouteObject } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import Dump from "@/pages/Dump";
import DatasetsPage from "@/pages/DatasetsPage";
import { MyUsersPage } from "@/pages/MyUsersPage";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import PageNotFound from "@/pages/PageNotFound";
import Unauthorized from "@/pages/Unauthorized";
import DatasetInfoPage from "@/pages/DatasetInfo";
import { MyBusiness } from "@/pages/MyBusiness";
import { MyAccountPage } from "@/pages/MyAccountPage";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/dump",
		element: <Dump />,
	},
	{
		path: "/datasets",
		element: (
			<ProtectedRoute>
				<DatasetsPage />
			</ProtectedRoute>
		),
	},
	{
		path: "/dataset-info",
		element: (
			<ProtectedRoute>
				<DatasetInfoPage />
			</ProtectedRoute>
		),
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
	{
		path: "/unauthorized",
		element: <Unauthorized />,
	},
	{
		path: "/myusers",
		element: (
			<ProtectedRoute>
				<MyUsersPage />
			</ProtectedRoute>
		),
	},
	{
		path: "/mybusiness",
		element: (
			<ProtectedRoute>
				<MyBusiness />
			</ProtectedRoute>
		),
	},
	{
		path: "/myaccount",
		element: (
			// <ProtectedRoute>
				<MyAccountPage />
			// </ProtectedRoute>
		),
	},
];
