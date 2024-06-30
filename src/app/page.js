import Features from "@/components/Features";
import Hero from "@/components/Hero";
import AddHobbyCard from "@/components/AddHobbyCard";
import Testimonials from "@/components/Testimonials";
import End from "@/components/End";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<AddHobbyCard />
			<Testimonials />
			<End />
			<Footer />
		</>
	);
}
