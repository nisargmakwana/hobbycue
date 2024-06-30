import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Joinin() {
	return (
		<div
			className={`${poppins.className} flex flex-col items-center gap-[2.8rem] w-[41rem] mt-[4rem]`}>
			<div className="flex w-full flex-col gap-[1.6rem]">
				<div className="grid grid-cols-[1fr_5fr] rounded-[0.8rem] gap-[5.8rem] pl-[2.4rem] py-[1.2rem] border border-[#8064A2]">
					<img src="/google.png" alt="Google Icon" className="w-[1.6rem]" />
					<p className="font-semibold text-[1.4rem] leading-[1.6rem] text-[#08090A]">
						Continue with Google
					</p>
				</div>
				<div className="grid grid-cols-[1fr_5fr] rounded-[0.8rem] gap-[5.8rem] pl-[2.4rem] py-[1.2rem] border border-[#8064A2]">
					<img src="/face.png" alt="Facebook Icon" className="w-[1.6rem]" />
					<p className="font-semibold  text-[1.4rem] leading-[1.6rem] text-[#08090A]">
						Continue with Facebook
					</p>
				</div>
			</div>
			<div className="flex items-center gap-[0.2rem]">
				<span className="inline-block w-[14.8rem] h-[2px] bg-[#CED4DA]"></span>
				<span className="text-[1.2rem] leading-[1.6rem] font-semibold text-black">
					{" "}
					Or connect with
				</span>
				<span className="inline-block w-[14.8rem] h-[2px] bg-[#CED4DA]"></span>
			</div>
			<div className="flex flex-col w-full gap-[2.4rem]">
				<div className="flex flex-col gap-[1.6rem]">
					<input
						type="text"
						placeholder="Email"
						className="font-[400] text-[1.2rem] leading-[1.6rem] rounded-[0.8rem] border border-[#EBEDF0] py-[1.2rem] pl-[1.2rem]"
					/>
					<div className="flex relative">
						<input
							type="text"
							placeholder="Password"
							className="font-[400] text-[1.2rem] w-full leading-[1.6rem] rounded-[0.8rem] border border-[#EBEDF0] py-[1.2rem] pl-[1.2rem]"
						/>
						<img
							src="password.png"
							alt="Password Icon"
							className="absolute right-[2rem] top-[1.3rem]"
						/>
						<p className="font-semibold text-right text-[1rem] leading-[1.6rem] text-[#939CA3] absolute right-[0.5rem] top-[4.5rem]">
							Password strength
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full gap-[2.4rem] mt-[2rem]">
				<p className="text-[#6D747A] text-[1.2rem] leading-[1.8rem] font-[400] ">
					By continuing, you agree to our{" "}
					<span className="text-[#08090A]">Terms of Service</span> and{" "}
					<span className="text-[#08090A]">Privacy Policy</span>.
				</p>
				<button className="rounded-[0.8rem] border bg-[#8064A2]  text-white border-[#8064A2] font-[600] text-[1.4rem] leading-[1.6rem] w-full py-[1.2rem] text-center">
					Agree and Continue
				</button>
			</div>
		</div>
	);
}

export default Joinin;
