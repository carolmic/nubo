import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/ContactForm/ContactForm";
import OurServices from "@/components/OurServices/OurServices";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const LandingPage = () => {
	return (
		<div className="flex flex-col items-center h-screen overflow-x-hidden">
			<Header />
			<div className="flex flex-col items-center gap-8">
				<Banner />
				<OurServices />
				<AboutUs />
				<ContactForm />
			</div>
			<Footer />
		</div>
	);
};
