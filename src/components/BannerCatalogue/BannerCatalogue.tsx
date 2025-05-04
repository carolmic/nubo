import { mockTags } from "@/mocks/tags";
import TagSelector from "../TagSelector/TagSelector";

const BannerCatalogue = () => {
	return (
		<section className="flex  bg-[url(../assets/banner-home.png)] bg-cover items-start justify-center w-screen min-h-100 py-10 px-30 bg-white rounded-b-60">
			<div className="w-align max-w-6xl w-full flex ">
				<div className="w-9/20 pt-30">
					<h1 className="relative text-(--color-white) text-[40px] font-black pb-3 leading-15">
						Search for datasets
					</h1>

					<TagSelector options={mockTags.map((tag) => tag.name)} />
				</div>
			</div>
		</section>
	);
};

export default BannerCatalogue;
