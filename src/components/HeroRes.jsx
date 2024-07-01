import { React, useState } from "react";
import { Poppins } from "next/font/google";
import Signin from "./Signin";
import Joinin from "./Joinin";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function HeroRes() {
	const [selected, setSelected] = useState("signin");
	return (
		<section className={`${poppins.className} w-full text-black bg-[#F7F5F9]`}>
			<div className="pt-[3.2rem] px-[9.7rem] max-[768px]:px-[2.4rem] ">
				<div className="">
					<h1 className="font-semibold italic text-[3.6rem] leading-[5.4rem] tracking-[2%] max-[768px]:text-[2.4rem] max-[768px]:leading-[3.2rem]">
						Explore your <span className="text-secondary">hobby</span> or{" "}
						<span className="text-primary">passion</span>{" "}
					</h1>
					<p className="font-light text-[1.4rem] leading-[3rem] tracking-[2%] mt-[1.6rem] max-[768px]:text-[1.4rem]">
						Sign-in to interact with a community of fellow hobbyists and an
						eco-system of experts, teachers, suppliers, classes, workshops, and
						places to practice, participate or perform. Your hobby may be about
						visual or performing arts, sports, games, gardening, model making,
						cooking, indoor or outdoor activities…
					</p>
					<p className="font-light text-[1.4rem] leading-[3rem] tracking-[2%] mt-[0.8rem]">
						If you are an expert or a seller, you can Add your Listing and
						promote yourself, your students, products, services or events. Hop
						on your hobbyhorse and enjoy the ride.
					</p>
				</div>
				<div className={`${poppins.className}  mt-[3.2rem] text-center`}>
					<button
						onClick={() => setSelected("signin")}
						className={`${
							selected === "signin" ? "text-primary" : "text-[#939CA3]"
						}  font-semibold text-[2rem] leading-[3rem] mr-[3.2rem]  inline-block`}>
						Sign In{" "}
					</button>
					<button
						onClick={() => setSelected("joinin")}
						className={`${
							selected === "joinin" ? "text-primary" : "text-[#939CA3]"
						}  font-semibold text-[2rem] leading-[3rem] inline-block `}>
						Join In{" "}
					</button>
				</div>
				<div clasName="">
					{selected === "signin" && <Signin />}
					{selected === "joinin" && <Joinin />}
				</div>

				<div className=" mt-[8rem] text-center">
					<img
						src="/hero-1.png"
						alt="People expressing their hobbies"
						className="max-w-[33.996rem] h-auto inline"
					/>
					<img
						src="/hero-2.png"
						alt="People expressing their hobbies"
						className="max-w-[34.517rem] h-auto inline"
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroRes;
