const Banner = () => {
	return (
		<section className="relative w-screen min-h-150 py-20 flex justify-center">
			<div className="absolute inset-0 bg-[url(../assets/banner_image.png)] bg-(--color-banner-bg) bg-cover bg-center z-0 opacity-80 shadow-[inset_0_0_100px_rgba(0,0,0,0.75)] rounded-b-60"></div>
			<div className="w-align">
				<h1 className="relative text-(--color-white) text-5xl font-black  leading-15">
				Access to strategic data <br /> for your business
				</h1>
				<br />
				<h2 className="relative text-(--color-white) text-3xl font-medium leading-10">
					Purchase business information <br /> tables and enhance your decisions.
				</h2>
			</div>
			
		</section>
	);
};

export default Banner;
