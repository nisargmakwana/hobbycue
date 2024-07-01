import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Signin() {
	return (
		<div className="w-full">
			<div
				className={`${poppins.className} flex flex-col items-center gap-[2.8rem] max-w-[41rem] max-[1200px]:max-w-[35rem] mt-[4rem] mx-auto`}>
				<div className="flex w-full flex-col gap-[1.6rem]">
					<div className="grid grid-cols-[1fr_5fr] rounded-[0.8rem] gap-[5.8rem] max-[1200px]:gap-[1.8rem] pl-[2.4rem] py-[1.2rem] border border-[#8064A2]">
						<img src="/google.png" alt="Google Icon" className="w-[1.6rem]" />
						<p className="font-semibold text-[1.4rem] leading-[1.6rem] text-[#08090A]">
							Continue with Google
						</p>
					</div>
					<div className="grid grid-cols-[1fr_5fr] rounded-[0.8rem] gap-[5.8rem] max-[1200px]:gap-[1.8rem] pl-[2.4rem] py-[1.2rem] border border-[#8064A2]">
						<img src="/face.png" alt="Facebook Icon" className="w-[1.6rem]" />
						<p className="font-semibold  text-[1.4rem] leading-[1.6rem] text-[#08090A]">
							Continue with Facebook
						</p>
					</div>
				</div>
				<div className=" relative ">
					<span className="inline-block w-[41rem] max-[1200px]:max-w-[35rem] h-[2px] bg-[#CED4DA]"></span>
					<span className="text-[1.2rem]  leading-[1.6rem] font-semibold text-black absolute right-[15.5rem] top-[0.2rem] z-10">
						{" "}
						Or connect with
					</span>
					{/* <span className="inline-block w-auto h-[2px] bg-[#CED4DA]"></span> */}
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
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full gap-[2.4rem]">
					<div className="flex justify-between">
						<div className="flex align items-center gap-[0.5rem]">
							<input type="checkbox" />{" "}
							<label className="font-[400] text-[1.2rem] leading-[1.6rem] text-black">
								Remember me
							</label>
						</div>
						<div className="flex items-center gap-[0.5rem]">
							<img src="padlock.png" alt="Padlock Icon" />
							<p className="font-[400] text-[1.2rem] leading-[1.6rem] text-black">
								Forgot password?
							</p>
						</div>
					</div>
					<button className="rounded-[0.8rem] border border-[black] font-[600] text-[1.4rem] leading-[1.6rem] w-full py-[1.2rem] text-center">
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}

export default Signin;
