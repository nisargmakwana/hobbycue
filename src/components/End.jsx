import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function End() {
	return (
		<section className={`${poppins.className} bg-[#F7FDFF]`}>
			<div className="flex flex-col px-[10rem] max-[1430px]:px-[6rem] pt-[10rem] max-[1430px]:pt-[6rem] gap-[10rem]">
				<div className="flex flex-col gap-[3rem]">
					<p className="font-[500] italic text-[3.6rem] max-[1200px]:text-[3.2rem] leading-[5.4rem] text-black">
						Your <span className="text-primary">Hobby</span> , Your{" "}
						<span className="text-secondary">Community...</span>
					</p>
					<button className="bg-[#8064A2] h-[4.6rem] items-center w-[14.7rem] text-center py-[1rem] rounded-[0.8rem] font-[500] text-[2rem] max-[1200px]:text-[1.6rem] leading-[3rem] text-white ">
						Get started
					</button>
				</div>
				<img
					src="end.png"
					alt="Avatars expressing their hobbies"
					className="max-w-[124rem] h-auto"
				/>
			</div>
		</section>
	);
}

export default End;
