import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Navbar() {
	return (
		<nav className="w-[144rem] h-[8rem] bg-[#FFFFFF] shadow-navbar items-center mt-[0.1rem] ">
			<div className="flex items-center justify-between mx-[9.7rem]">
				<div className=" flex items-center justify-between gap-[3.474rem]">
					<Image
						src="/hobbycue-logo.png"
						width={293.26}
						height={60}
						alt="Hobbycue Logo"
					/>
					<div
						className={`flex border border-[#EBEDF0] rounded-[0.8rem] ${poppins.className}`}>
						<input
							type="text"
							className="w-[26rem] h-[4rem] pl-[1.2rem] font-light text-[1.2rem] leading-[1.6rem]"
							placeholder="Search here..."
						/>
						<Image
							src="/search-icon.png"
							width={40}
							height={40}
							alt="Hobbycue Logo"
							className=""
						/>
					</div>
				</div>

				<div
					className={`max-w-[52.5rem] h-[4rem] ${poppins.className} flex items-center gap-[1.4rem] ml-[8rem]`}>
					<div className="flex gap-[0.5rem]">
						<Image
							src="/explore.png"
							width={24}
							height={24}
							alt="Explore Icon"
							className=""
						/>
						<p className="text-[1.4rem] font-[500] leading-[2.2rem]">Explore</p>
						<Image
							src="/expand-arrow.png"
							width={24}
							height={24}
							alt="Expand Arrow Icon"
							className=""
						/>
					</div>
					<div className="flex gap-[0.5rem]">
						<Image
							src="/star-1.png"
							width={24}
							height={24}
							alt="Star Icon"
							className=""
						/>
						<p className="text-[1.4rem] font-[500] leading-[2.2rem]">Hobbies</p>
						<Image
							src="/expand-arrow.png"
							width={24}
							height={24}
							alt="Expand Arrow Icon"
							className=""
						/>
					</div>
					<div className="flex gap-[2.4rem] items-center">
						<Image
							src="/bookmark.png"
							width={24}
							height={24}
							alt="Bookmark Icon"
							className=""
						/>
						<Image
							src="/notifications.png"
							width={24}
							height={24}
							alt="Notifications Icon"
							className=""
						/>
						<Image
							src="/product-cart.png"
							width={24}
							height={24}
							alt="Product Cart Icon"
							className=""
						/>
						<button
							className={`${poppins.className} font-semibold text-[1.4rem] leading-[1.6rem] text-primary rounded-[0.8rem] border border-primary px-[3.2rem] py-[1rem] `}>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
