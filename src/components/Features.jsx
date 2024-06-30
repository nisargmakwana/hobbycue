import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Features() {
	return (
		<section className={`${poppins.className}  ]`}>
			<div className="p-[10rem] grid grid-cols-2 gap-[2.4rem]">
				<div className="group flex flex-col p-[4rem] gap-[2.4rem] border border-[#CED4DA] hover:border-[0.2rem] hover:border-[#8064A2] hover:bg-[#8064A2] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						{/* <img src="/people.png" alt="People Icon" /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-[4rem] text-[#8064A2] group-hover:text-white">
							<path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
						</svg>

						<p className="text-[2.4rem] font-semibold leading-[3.6rem] group-hover:text-white">
							People
						</p>
					</div>
					<p className="font-light text-[1.8rem] leading-[2.7rem] group-hover:text-white">
						Find a teacher, coach, or expert for your hobby interest in your
						locality. Find a partner, teammate, accompanist or collaborator.
					</p>
					<button className="w-[12.2rem] h-[4rem] text-primary group-hover:text-white border border-[#8064A2] group-hover:border-white rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Connect
					</button>
				</div>
				<div className=" group flex flex-col p-[4rem] gap-[2.4rem] border hover:bg-[#77933C] border-[#CED4DA] hover:border-[0.2rem] hover:border-[#77933C] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						{/* <img src="/place.png" alt="Place Icon" /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-[4rem] text-[#77933C] group-hover:text-white">
							<path
								fillRule="evenodd"
								d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
								clipRule="evenodd"
							/>
						</svg>

						<p className="text-[2.4rem] group-hover:text-white font-semibold leading-[3.6rem]">
							Place
						</p>
					</div>
					<p className="font-light text-[1.8rem] leading-[2.7rem] group-hover:text-white">
						Find a class, school, playground, auditorium, studio, shop or an
						event venue. Book a slot at venues that allow booking through
						hobbycue.
					</p>
					<button className="w-[12.2rem] h-[4rem] text-primary group-hover:text-white  group-hover:border-white border border-[#8064A2] rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Meet up
					</button>
				</div>
				<div className="group flex flex-col p-[4rem] gap-[2.4rem] border hover:border-[0.2rem] hover:border-[#C0504D] hover:bg-[#C0504D] border-[#CED4DA] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						{/* <img src="/product.png" alt="People Icon" /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-[4rem] text-[#C0504D] group-hover:text-white">
							<path
								fillRule="evenodd"
								d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
								clipRule="evenodd"
							/>
						</svg>

						<p className="text-[2.4rem] group-hover:text-white font-semibold leading-[3.6rem]">
							Product
						</p>
					</div>
					<p className="font-light text-[1.8rem] group-hover:text-white leading-[2.7rem]">
						Find equipment or supplies required for your hobby. Buy, rent or
						borrow from shops, online stores or from community members.
					</p>
					<button className="w-[12.2rem] h-[4rem] text-primary border group-hover:border-white group-hover:text-white border-[#8064A2] rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Get it
					</button>
				</div>
				<div className="group flex flex-col p-[4rem] gap-[3.2rem] hover:bg-[#0096C8] hover-border-[0.2rem] hover-border-[#0096C8] border border-[#CED4DA] rounded-[0.8rem]">
					<div className="flex gap-[2.4rem]">
						{/* <img src="/program.png" alt="Program Icon" /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-[4rem] text-[#0096C8] group-hover:text-white">
							<path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
							<path
								fillRule="evenodd"
								d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
								clipRule="evenodd"
							/>
						</svg>

						<p className="text-[2.4rem] group-hover:text-white font-semibold leading-[3.6rem]">
							Program
						</p>
					</div>
					<p className="font-light text-[1.8rem] group-hover:text-white leading-[2.7rem]">
						Find events, meetups and workshops related to your hobby. Register
						or buy tickets online.
					</p>
					<button className="w-[12.2rem] h-[4rem] group-hover:text-white group-hover:border-white text-primary border border-[#8064A2] rounded-[0.8rem] py-[1.2rem] text-center text-[1.4rem] leading-[1.6rem]">
						Attend
					</button>
				</div>
			</div>
		</section>
	);
}

export default Features;
