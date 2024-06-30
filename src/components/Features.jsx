import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Features() {
	return (
		<section className={`${poppins.className} text-black`}>
			<div className="p-[10rem] grid grid-cols-2 gap-[2.4rem] ">
				<div className="flex flex-col p-[4rem] gap-[2.4rem] border border-[#CED4DA] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						<img src="/people.png" alt="People Icon" />
						<p className="text-[2.4rem] font-semibold leading-[3.6rem]">
							People
						</p>
					</div>
					<p className="font-light text-[1.8rem] leading-[2.7rem]">
						Find a teacher, coach, or expert for your hobby interest in your
						locality. Find a partner, teammate, accompanist or collaborator.
					</p>
					<button className="w-[12.2rem] h-[4rem] text-primary border border-[#8064A2] rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Connect
					</button>
				</div>
				<div className="flex flex-col p-[4rem] gap-[2.4rem] border border-[#CED4DA] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						<img src="/place.png" alt="Place Icon" />
						<p className="text-[2.4rem] font-semibold leading-[3.6rem]">
							Place
						</p>
					</div>
					<p className="font-light text-[1.8rem] leading-[2.7rem]">
						Find a class, school, playground, auditorium, studio, shop or an
						event venue. Book a slot at venues that allow booking through
						hobbycue.
					</p>
					<button className="w-[12.2rem] h-[4rem] text-primary border border-[#8064A2] rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Meet up
					</button>
				</div>
				<div className="flex flex-col p-[4rem] gap-[2.4rem] border border-[#CED4DA] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						<img src="/product.png" alt="People Icon" />
						<p className="text-[2.4rem] font-semibold leading-[3.6rem]">
							Product
						</p>
					</div>
					<p className="font-light text-[1.8rem] leading-[2.7rem]">
						Find equipment or supplies required for your hobby. Buy, rent or
						borrow from shops, online stores or from community members.
					</p>
					<button className="w-[12.2rem] h-[4rem] text-primary border border-[#8064A2] rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Get it
					</button>
				</div>
				<div className="flex flex-col p-[4rem] gap-[3.2rem]  border border-[#CED4DA] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						<img src="/program.png" alt="Program Icon" />
						<p className="text-[2.4rem] font-semibold leading-[3.6rem]">
							Program
						</p>
					</div>
					<p className="font-light text-[1.8rem] leading-[2.7rem]">
						Find events, meetups and workshops related to your hobby. Register
						or buy tickets online.
					</p>
					<button className="w-[12.2rem] h-[4rem] text-primary border border-[#8064A2] rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Attend
					</button>
				</div>
			</div>
		</section>
	);
}

export default Features;
