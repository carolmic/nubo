import { Link } from "react-router-dom";

const Unauthorized = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-gray-100)] p-4">
			<div className="text-center max-w-2xl">
				<h2 className="text-3xl font-semibold text-[var(--color-blue-title)] mb-6">
					Forbidden
				</h2>
				<p className="text-lg text-[var(--color-blue-300)] mb-8">
					Sorry, you don't have permission to access this page.
				</p>
				<Link
					to="/"
					className="inline-block bg-[var(--color-blue-100)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-blue-200)] transition-colors duration-200"
				>
					Back to home
				</Link>
			</div>
		</div>
	);
};

export default Unauthorized;
