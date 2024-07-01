"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { UseWindowWidth } from "@/hooks/UseWindowWidth";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Testimonials() {
	const windowWidth = UseWindowWidth();

	if (windowWidth === null) {
		// While determining the screen width
		return null;
	}

	return (
		<section className={`${poppins.className} bg-white `}>
			<div className="flex flex-col m-[10rem] max-[1430px]:m-[6rem] max-[1250px]:m-[2rem] gap-[3.2rem] p-[4rem] bg-[#F7F5F9] ">
				<div className="flex gap-[2.4rem] ">
					<img src="quote.png" alt="Quote Icon" />
					<p className="font-semibold text-[2.4rem] leading-[3.6rem] text-slate-950">
						Testimonials
					</p>
				</div>
				<p className="font-light text-[1.8rem] max-[768px]:text-[1.4rem] leading-[3rem] tracking-[2%] text-[#6D747A]">
					In a fast growing and ever changing city like Bangalore, it sometimes
					becomes very difficult to find or connect with like minded people.
					Websites like hobbycue.com is a great service which helps me get in
					touch with, communicate, connect, and exchange ideas with other
					dancers. It also provides the extra benefit of finding products and
					services that I can avail, which I can be assured is going to be of
					great quality as it comes recommended by people of the hobbycue
					community. To have discussions, to get visibility, and to be able to
					safely explore various hobbies and activities in my city, all under
					one roof, is an excellent idea and I highly recommend it.
				</p>
				<div className="flex max-[1088px]:flex-col max-[1088px]:gap-[3.2rem] max-[768px]:gap-[2rem] max-[1088px]:items-center justify-between">
					{windowWidth >= 768 ? (
						<img
							src="audio.png"
							alt="Audio Track"
							className="max-w-[77.6rem] max-[1400px]:max-w-[60rem] h-auto"
						/>
					) : (
						<img src="audio-track-small.png" alt="Audio Track" />
					)}

					<div className="flex  gap-[1.2rem] items-center">
						{windowWidth >= 768 ? (
							<img
								src="shubha.png"
								alt="Testimonial Headshot"
								className="max-w-[10rem]  h-[10rem]"
							/>
						) : (
							<img src="shubha-small.png" alt="Testimonial Headshot" />
						)}

						<div className="flex flex-col gap-[0.5rem]">
							<p className="font-semibold text-[1.8rem] leading-[2.7rem] tracking-[2%] text-primary">
								Shubha Nagarajan
							</p>
							<p className="font-[400] text-[1.4rem] leading-[2.1rem] tracking-[2%] text-secondary">
								Classical Dancer
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
