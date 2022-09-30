import React from "react";

import { GiSubmarine } from "react-icons/gi";
import { FaCar, FaHandHoldingMedical } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

function contact() {
	return (
		<div className="flex flex-col justify-center items-center py-8 bg-slate-800 w-full">
			{/* <div className="max-w-[90vw] md:max-w-[80vw]">
				<div className="cards_container ">
					<div className="pt-24 text-center">
						<h1 className="sHeading text-[#FF6600] mb-6">
							We’d love to hear from you
						</h1>
						<h3 className="pText text-white mb-12">
							Whether you’re curious about features, a free trial, or even
							press—we’re ready to answer any and all questions.
						</h3>
					</div>
					<div className="w-full flex justify-center items-center">
						<div className="w-[100%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white justify-center">
							<div className="border border-[#FF6600] flex flex-col items-center justify-center px-5 py-10">
								<GiSubmarine size={50} className="p-1 mb-2" />
								<span className="pText  mr-4 text-[#FF6600] mb-4">Support</span>
								<p className="mb-16">
									Need a hand using Unbounce or managing your account? Chat with
									a real, live human or self-serve using our Help Center.
								</p>
								<button className="bg-[#FF6600] px-4 py-2 rounded-full ">
									Lets chat
								</button>
							</div>
							<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
								<FaCar size={50} className="p-1 mb-2" />
								<span className="pText mr-4 text-[#FF6600] mb-4">
									Partnerships
								</span>
								<p className="mb-16">
									We’re into co-marketing with awesome brands. Fill out the form
									here, and our Partnerships Manager will circle back.
								</p>
								<button className="bg-[#FF6600] px-4 py-2 rounded-full ">
									Lets chat
								</button>
							</div>
							<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
								<FaHandHoldingMedical size={50} className="p-1 mb-2" />
								<span className="pText mr-4 text-[#FF6600] mb-4">Shop</span>
								<p className="mb-16">
									Wondering if Unbounce is the right tool for your business?
									Chat with our team to see if there’s a fit.
								</p>
								<button className="bg-[#FF6600] px-4 py-2 rounded-full ">
									View Shop
								</button>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className="max-w-[90vw] md:max-w-[80vw] py-36">
				<div className="cards_container ">
					<div className="pt-24 text-center flex justify-center flex-col items-center">
						<h1 className="sHeading text-[#FF6600] mb-6">
							We’d love to hear from you
						</h1>
						<h3 className="pText text-white mb-12 w-[100%] md:w-[50%]">
							Your wifi connects automatically at home. This is where ours is.
							Give us a call, or better yet, stop by our office to say hello in
							person.
						</h3>
					</div>
					<div className="w-full flex justify-center items-center">
						<div className="w-[100%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white justify-center">
							<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9814953690116!2d18.46676659236328!3d-33.91587582648652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5db107ede329%3A0x725a98b38f3980cb!2s22%20Cumberland%20Rd%2C%20Paarden%20Eiland%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1663664152861!5m2!1sen!2sza"
									style={{ height: "100%", width: "100%" }}
									loading="lazy"
								></iframe>
							</div>
							<div className="border border-[#FF6600] flex flex-col  p-5">
								<GrMapLocation size={50} className="p-1 mb-2 " />

								<ul>
									<div>
										<h4 className="sHeading text-[#FF6600] mb-6">Cape Town</h4>
										<div className="flex items-center mb-4">
											<span>
												<div className="w-6 mr-2">
													<MdEmail />
												</div>
											</span>
											<span className="leading-16">info@o-megaverse.com</span>
										</div>
										<div className="flex items-center mb-4">
											<span>
												<div className="w-6 mr-2">
													<FiPhoneCall />
												</div>
											</span>
											<span>+27 87 820 8800</span>
										</div>
										<div className="flex items-center">
											<span>
												<div className="w-6 mr-2">
													<ImLocation2 />
												</div>
											</span>
											<ul>
												<li>22 Cumberland</li>
												<li>Paarden Eiland</li>
												<li>Cape Town</li>
											</ul>
										</div>
									</div>
								</ul>
							</div>
							<div className="border border-[#FF6600] flex flex-col  p-5">
								<img src="/img/contact/dm.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default contact;
