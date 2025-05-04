export const Loader = () => {
	return (
		<div
			data-testid="loader-container"
			className="flex flex-col items-center justify-center gap-4 h-screen"
		>
			<div
				data-testid="loader-spinner"
				className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
			/>
			<p className="text-gray-600 font-medium">Loading...</p>
		</div>
	);
};
