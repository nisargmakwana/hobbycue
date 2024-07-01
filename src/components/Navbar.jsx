"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import ExploreList from "./ExploreList";
import NavRes from "./NavRes";
import { UseWindowWidth } from "@/hooks/UseWindowWidth";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Navbar() {
	const windowWidth = UseWindowWidth();
	console.log(windowWidth);
	if (windowWidth === null) {
		// While determining the screen width
		return null;
	}

	return <>{windowWidth >= 1112 ? <Nav /> : <NavRes />}</>;
}

const Nav = () => {
	const [active, setActive] = useState(false);
	const windowWidth = UseWindowWidth();
	if (windowWidth === null) {
		// While determining the screen width
		return null;
	}
	return (
		<nav className="max-w-[144rem] h-[8rem] bg-[#FFFFFF] shadow-navbar items-center mt-[0.1rem] relative ">
			{active ? <ExploreList /> : <></>}
			<div className="flex items-center justify-between mx-[9.7rem] max-[1430px]:mx-[6rem] max-[1250px]:mx-[2rem]">
				<div className=" flex items-center justify-between gap-[3.474rem] ">
					<img
						src="/hobbycue-logo.png"
						alt="Hobbycue Logo"
						className="max-w-[29.326rem] h-auto max-[1356px]:max-w-[24rem]"
					/>
					<div
						className={`flex border border-[#EBEDF0] rounded-[0.8rem] ${poppins.className}`}>
						<input
							type="text"
							className="w-[26rem] max-[1356px]:w-[20rem] max-[1170px]:w-[15rem] h-[4rem] pl-[1.2rem] font-light text-[1.2rem] leading-[1.6rem] "
							placeholder="Search here..."
						/>
						<img
							src="/search-icon.png"
							alt="Hobbycue Logo"
							className="max-w-[4rem] h-[4rem]"
						/>
					</div>
				</div>

				<div
					className={`max-w-[52.5rem] h-[4rem] ${poppins.className} flex items-center gap-[1.4rem] ml-[8rem]`}>
					<div className="flex gap-[0.5rem]">
						<img
							src="/explore.png"
							alt="Explore Icon"
							className="max-w-[2.4rem] h-[2.4rem]"
						/>
						<p className="text-[1.4rem] font-[500] leading-[2.2rem]">Explore</p>
						<img
							src="/expand-arrow.png"
							alt="Expand Arrow Icon"
							className="w-[2.4rem] h-[2.4rem]"
							onClick={() => setActive(!active)}
						/>
					</div>
					<div className="flex gap-[0.5rem]">
						<img
							src="/star-1.png"
							alt="Star Icon"
							className="max-w-[2.4rem] h-[2.4rem]"
						/>
						<p className="text-[1.4rem] font-[500] leading-[2.2rem]">Hobbies</p>
						<img
							src="/expand-arrow.png"
							alt="Expand Arrow Icon"
							className="max-w-[2.4rem] h-[2.4rem]"
						/>
					</div>
					<div className="flex gap-[2.4rem] items-center">
						<img
							src="/bookmark.png"
							alt="Bookmark Icon"
							className="max-w-[2.4rem] h-[2.4rem]"
						/>
						<img
							src="/notifications.png"
							alt="Notifications Icon"
							className="max-w-[2.4rem] h-[2.4rem]"
						/>
						<img
							src="/product-cart.png"
							alt="Product Cart Icon"
							className="max-w-[2.4rem] h-[2.4rem]"
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
};
export default Navbar;
