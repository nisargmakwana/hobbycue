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
			<div className="p-[10rem] max-[1430px]:p-[6rem] max-[1250px]:p-[2rem]">
				<div className="flex flex-col gap-[3.4rem] p-[2.4rem] bg-white">
					<div className="flex gap-[2.4rem] max-[768px]:block max-[768px]:mx-auto">
						<img
							src="plus.png"
							alt=""
							className="max-[768px]:inline-block max-[768px]:mr-[1.2rem]"
						/>
						<p className="font-semibold text-[2.4rem] max-[1200px]:text-[2rem] leading-[3.6rem] max-[768px]:inline-block">
							Add your own
						</p>
					</div>
					<p className="font-light text-[1.8rem] max-[1200px]:text-[1.6rem] leading-[3rem] tracking-[2%] text-[#08090A] max-[768px]:text-center">
						Are you a teacher or expert? Do you sell or rent out equipment,
						venue or event tickets? Or, you know someone who should be on
						hobbycue? Go ahead and Add your Own page
					</p>
					<button className="py-[1.2rem] text-[1.4rem] w-[12.1rem] font-semibold text-center border border-[#8064A2] text-primary rounded-[0.8rem] max-[768px]:mx-auto">
						Add new
					</button>
				</div>
			</div>
		</section>
	);
}

export default AddHobbyCard;
