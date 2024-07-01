import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function ExploreList() {
	return (
		<ul
			className={`${poppins.className} text-[#6D747A] text-[1.4rem] leading-[1.8rem] tracking-[0.5%] max-w-[22rem] absolute right-[40rem] top-[8rem] bg-white `}>
			<li className="px-[1.2rem] py-[1.2rem] border-b-[0.2rem]">
				People - Community
			</li>
			<li className="px-[1.2rem] py-[1.2rem]  border-b-[0.2rem]">
				Places - Venues
			</li>
			<li className="px-[1.2rem] py-[1.2rem]  border-b-[0.2rem]">
				Programs - Events
			</li>
			<li className="px-[1.2rem] py-[1.2rem] border-b-[0.2rem]">
				Products - Store
			</li>
			<li className="px-[1.2rem] py-[1.2rem] border-b-[0.2rem]">Blogs</li>
		</ul>
	);
}

export default ExploreList;
