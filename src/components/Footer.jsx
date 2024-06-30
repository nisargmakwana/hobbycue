import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Footer() {
	return (
		<>
			<section
				className={`${poppins.className} text-[#08090A] text-[1.4rem] leading-[1.8rem] tracking-[0.5%]`}>
				<div className="flex gap-[19rem] bg-white px-[10rem] py-[6rem]">
					<ul className="flex flex-col gap-[0.8rem]">
						<li className="font-bold mb-[1.2rem]">Hobbycue</li>
						<li className="hover:text-primary ">About us</li>
						<li className="hover:text-primary ">Our Services</li>
						<li className="hover:text-primary ">Work with Us</li>
						<li className="hover:text-primary ">FAQ</li>
						<li className="hover:text-primary">Contact Us</li>
					</ul>
					<ul className="flex flex-col gap-[0.8rem]">
						<li className="font-bold mb-[1.2rem]">How Do I</li>
						<li className="hover:text-primary">Sign Up</li>
						<li className="hover:text-primary">Add a Listing</li>
						<li className="hover:text-primary">Claim Listing</li>
						<li className="hover:text-primary">Post a Query</li>
						<li className="hover:text-primary">Add a Blog Post</li>
						<li className="hover:text-primary">Other Queries</li>
					</ul>
					<ul className="flex flex-col gap-[0.8rem]">
						<li className="font-bold mb-[1.2rem]">Quick Links</li>
						<li className="hover:text-primary">Sign Up</li>
						<li className="hover:text-primary">Listings</li>
						<li className="hover:text-primary">Blog Posts</li>
						<li className="hover:text-primary">Shop / Store</li>
						<li className="hover:text-primary">Community</li>
					</ul>
					<div className="flex flex-col gap-[5rem]">
						<div className="flex flex-col gap-[1.6rem]">
							<p className="font-bold text-[1.4rem] leading-[1.8rem] tracking-[0.5%] text-[#08090A]">
								Social Media
							</p>
							<div className="flex items-center gap-[2.4rem]">
								<img src="facebook.png" alt="Facebook Icon" />
								<img src="twitter.png" alt="Twitter Icon" />
								<img src="instagram.png" alt="Instagram Icon" />
								<img src="pinterest.png" alt="Pinterest Icon" />
								<img src="googleplus.png" alt="Googleplus Icon" />
								<img src="youtube.png" alt="Youtube Icon" />
								<img src="telegram.png" alt="Telegram Icon" />
								<img src="email.png" alt="Email Icon" />
							</div>
						</div>
						<div className="flex flex-col gap-[1.6rem]">
							<p className="font-bold text-[1.4rem] leading-[1.8rem] tracking-[0.5%] text-[#08090A]">
								Invite Friends
							</p>
							<div className="flex relative">
								<input
									type="text"
									placeholder="Email ID"
									className="text-[1.2rem] leading-[1.6rem] font-[400] py-[1.2rem] pl-[1.2rem] w-full border border-primary rounded-[0.8rem]"
								/>
								<button className="bg-[#8064A2] text-white py-[1.2rem] pl-[0.5rem] font-semibold text-[1.2rem] leading-[1.6rem] tracking-[0.5%] absolute right-0 w-[6rem] rounded-tr-[0.8rem] h-full rounded-br-[0.8rem]">
									Invite
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="bg-[#F7F5F9] text-[1.4rem] leading-[1.8rem] tracking-[0.5%] text-[#08090A] py-[3rem] text-center">
				© Purple Cues Private Limited
			</footer>
		</>
	);
}

export default Footer;
