type MainBannerProps = {
	title: string;
};

const MainBanner = ({ title }: MainBannerProps) => {
	return (
		<section className="relative w-screen min-h-55 py-0 pb-10 flex justify-center items-end">
			<div className="absolute inset-0 bg-[url(../assets/MainBannerBackground.png)] bg-cover bg-center z-0  shadow-[inset_0_0_100px_rgba(0,0,0,0.75)]"></div>
			<div className="w-align">
				<h1 className="relative text-(--color-white) text-4xl font-black  leading-15">
				{title}
				</h1>
			</div>
			
		</section>
	);
};

export default MainBanner;
