import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function AddHobbyCard() {
	return (
		<section className={`${poppins.className} bg-[#F7FDFF] text-black`}>
			<div className="p-[10rem]">
				<div className="flex flex-col gap-[3.4rem] p-[2.4rem] bg-white">
					<div className="flex gap-[2.4rem]">
						<img src="plus.png" alt="" />
						<p className="font-semibold text-[2.4rem] leading-[3.6rem]">
							Add your own
						</p>
					</div>
					<p className="font-light text-[1.8rem] leading-[3rem] tracking-[2%] text-[#08090A]">
						Are you a teacher or expert? Do you sell or rent out equipment,
						venue or event tickets? Or, you know someone who should be on
						hobbycue? Go ahead and Add your Own page
					</p>
					<button className="py-[1.2rem] w-[12.1rem] text-center border border-[#8064A2] text-primary rounded-[0.8rem]">
						Add new
					</button>
				</div>
			</div>
		</section>
	);
}

export default AddHobbyCard;
