"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import ExploreList from "./ExploreList";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function NavRes() {
	return (
		<nav
			className={`${poppins.className} flex justify-between items-center mx-[9.7rem] max-[768px]:mx-[2.7rem]`}>
			<img
				src="hobbycue-logo.png"
				alt="Hobbycue Logo"
				className="max-w-[30rem] max-[768px]:max-w-[25.64rem] max-[500px]:max-w-[20rem]"
			/>
			<div className="flex gap-[1.6rem]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-[4rem] max-[500px]:size-[3rem] text-primary">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="size-[4rem] max-[500px]:size-[3rem] text-primary">
					<path
						fillRule="evenodd"
						d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
						clipRule="evenodd"
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-[4rem] max-[500px]:size-[3rem] text-primary">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</div>
		</nav>
	);
}

export default NavRes;
