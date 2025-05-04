import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { mockUsers } from "@/mocks/users";
import MainBanner from "@/components/MainBanner/MainBanner";
import DatasetPreview from "@/components/DatasetPreview/DatasetPreview";
import ButtonComponent from "@/components/Button/Button";
import FileTypeSelector from "@/components/FileTypeSelector/FileTypeSelector";
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection";

export const DatasetInfoPage = () => {

    const mockColumns = ["Velocity", "Time", "Weather", "Light", "Salt", "Pepper", "Soccer"]
    const mockContent = [
      { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" },
      { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" },
      { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" },
      { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" }
    ]

	return (
		<div className="flex flex-col items-center h-screen overflow-x-hidden ">
			<Header user={mockUsers[0]} />
			<div className="flex flex-col items-center gap-4 w-align">
				<MainBanner title="Dataset1"/>
                <DescriptionSection />
                <p className="w-full text-3xl font-semibold text-(--color-blue-400)">Preview</p>
				    <DatasetPreview columnNames={mockColumns} content={mockContent} />
                <div className="flex justify-start items-center w-full gap-8 mt-15 mb-20">
                    <ButtonComponent className="px-15 py-6" type='button' text="Buy" />
                    <FileTypeSelector />
                </div>
			</div>
			<Footer />
		</div>
	);
};

export default DatasetInfoPage;
