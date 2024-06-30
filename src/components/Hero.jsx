"use client";
import { useState, React } from "react";
import Joinin from "./Joinin";
import Signin from "./Signin";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Hero() {
	const [selected, setSelected] = useState("signin");
	return (
		<section
			className={`${poppins.className} max-w-[144rem] w-full h-[67.8rem] text-black`}>
			<div className="pt-[10rem] px-[10rem] flex gap-[12.3rem]">
				<div className="max-w-[70.7rem]">
					<h1 className="font-semibold italic text-[3.6rem] leading-[5.4rem] tracking-[2%]">
						Explore your <span className="text-secondary">hobby</span> or{" "}
						<span className="text-primary">passion</span>{" "}
					</h1>
					<p className="font-light text-[1.4rem] leading-[3rem] tracking-[2%] mt-[3.2rem]">
						Sign-in to interact with a community of fellow hobbyists and an
						eco-system of experts, teachers, suppliers, classes, workshops, and
						places to practice, participate or perform. Your hobby may be about
						visual or performing arts, sports, games, gardening, model making,
						cooking, indoor or outdoor activities…
					</p>
					<p className="font-light text-[1.4rem] leading-[3rem] tracking-[2%] mt-[1.6rem]">
						If you are an expert or a seller, you can Add your Listing and
						promote yourself, your students, products, services or events. Hop
						on your hobbyhorse and enjoy the ride.
					</p>
					<div className="flex mt-[8rem]">
						<img
							src="/hero-1.png"
							alt="People expressing their hobbies"
							className="max-w-[33.996rem]"
						/>
						<img
							src="/hero-2.png"
							alt="People expressing their hobbies"
							className="max-w-[34.517rem]"
						/>
					</div>
				</div>
				<div>
					<div className={`${poppins.className} flex gap-[3.2rem]`}>
						<button
							onClick={() => setSelected("signin")}
							className={`${
								selected === "signin" ? "text-primary" : "text-[#939CA3]"
							}  font-semibold text-[2rem] leading-[3rem] `}>
							Sign In{" "}
						</button>
						<button
							onClick={() => setSelected("joinin")}
							className={`${
								selected === "joinin" ? "text-primary" : "text-[#939CA3]"
							}  font-semibold text-[2rem] leading-[3rem] `}>
							Join In{" "}
						</button>
					</div>
					{selected === "signin" && <Signin />}
					{selected === "joinin" && <Joinin />}
				</div>
			</div>
		</section>
	);
}
export default Hero;
