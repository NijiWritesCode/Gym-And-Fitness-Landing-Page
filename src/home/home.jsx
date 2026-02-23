import React, { useState } from "react";
import Navbar from "../components/navbar";
import image from "../assets/bg.jpg";
import gymPic1 from "../assets/gym-pics.jpg";
import gymPic2 from "../assets/gym-pics-2.jpg";
import board from "../assets/location.webp";
import { Location01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";

const Home = () => {
	const [activeId, setActiveId] = useState(1);

	const data = [
		{
			id: 1,
			title: "Strength",
			description: "Build power and endurance with guided workouts.",
			image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
		},
		{
			id: 2,
			title: "Cardio",
			description: "High-energy cardio sessions for fat burn.",
			image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1200",
		},
		{
			id: 3,
			title: "Yoga",
			description: "Improve flexibility and mental clarity.",
			image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
		},
		{
			id: 4,
			title: "CrossFit",
			description: "Full-body functional fitness training.",
			image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200",
		},
	];

	const leftVariant = {
			hidden: {x: -300},
			visible: {x: 0}
		}
	
		const rightVariant = {
			hidden: {x: 300},
			visible: {x: 0}
		}

	return (
		<section>
			<header  className="pt-4 mx-auto">
				<Navbar />

				<div className="lg:flex pt-15">

					<motion.div variants={leftVariant} initial="hidden" animate="visible" transition={{duration: 1.2}} className="mt-10 pl-5 lg:pl-15">
						<h2 className="text-5xl lg:text-7xl w-80 lg:w-120 text-white">Unleash Your Inner Athlete</h2>

						<p className="w-90 mt-5 text-white">
							We are dedicated to helping you transform your body and mind through the power of fitness.
						</p>

						<div className="flex gap-5 items-center">
							<div className="mt-5">
								<button className="bg-green-500 px-3 py-2.5 rounded-tl-2xl cursor-pointer ">JOIN NOW</button>
								<button className="bg-green-700 px-3 py-2.5 cursor-pointer">$49/Month</button>
							</div>

							<button className="border mt-5 border-white text-white px-3 rounded py-2.5 cursor-pointer hover:rounded-3xl hover:bg-white hover:text-black transition-all ease-in-out duration-200">
								Join Free Trial
							</button>
						</div>
						<h1 className="text-white text-5xl w-100 mt-20">Transform Your Fitness Journey</h1>
					</motion.div>

					<motion.div variants={rightVariant} initial="hidden" animate="visible" transition={{duration: 1.2}} className="mt-18 lg:pl-50 flex flex-col relative">
						<div className="w-60 h-60 mx-auto lg:w-100 lg:h-100 overflow-hidden rounded-2xl">
							<img src={image} alt="bg" className="w-full h-full object-cover" />
						</div>

						<div className="w-40 rounded-xl px-3 py-2.5 backdrop-blur-xl border shadow- shadow-green-400 border-green-400 relative -top-30 left-5 text-white">
							<p className="font-semibold text-xl">500+</p>
							<p className="">happy members</p>
						</div>
						<p className="text-gray-300 px-12 lg:relative lg:-left-14 text-center">
							Offers customised workout programs to help clients to acheive their fitness goals such as weight loss,
							strength nd conditioning and body shaping.
						</p>
					</motion.div>

				</div>
			</header>

			<main>
				<div className="w-full max-w-6xl mx-auto p-6 mt-5">
					<div className="flex gap-5">
						{data.map((item) => {
							const isActive = item.id === activeId;

							return (
								<div
									key={item.id}
									onClick={() => setActiveId(item.id)}
									className={`relative cursor-pointer overflow-hidden rounded-2xl w-20 transition-all duration-500 ease-in-out
                                    ${isActive ? "flex-4" : "flex-1"} h-80`}>
									<img
										src={item.image}
										alt={item.title}
										className="absolute inset-0 w-full h-full object-cover"
										loading="lazy"
									/>

									<div className="absolute inset-0 bg-black/50" />

									<div className="relative h-full flex flex-col justify-end p-4 text-white">
										<h3 className={`text-xl font-semibold  ${!isActive ? "rotate-270 lg:mb-15" : "rotate-360"}`}>
											{item.title}
										</h3>

										{isActive && <p className="text-sm mt-2 text-gray-200 max-w-md">{item.description}</p>}
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="w-[95%] mx-auto mt-10 mb-5 lg:flex gap-5">

					<div className="text-white ml-5 lg:ml-23 w-[50%]">
						<h1 className="lg:text-5xl text-2xl">Comfortable Gym</h1>

						<p className="w-70 text-gray-300 mt-5 lg:text-left text-center">
							Our facilities provide the perfect setting to help you reach your fitness goals.
						</p>

						<div className="mt-15 lg:overflow-hidden flex">
							<img src={gymPic1} alt="" className="min-w-120 hidden lg:flex relative -left-100 h-60 object-cover" />
							<img
								src={gymPic2}
								alt=""
								className="lg:min-w-120 min-w-90 mx-auto rounded-xl lg:rounded-none lg:relative lg:-left-90 h-60 object-cover"
							/>
						</div>
					</div>

					<div className="bg-slate-950 lg:mt-0 mt-20 text-white">
						<img src={board} alt="" className="rounded-tr-[200px]" />
						<div className="bg-green-500 w-10 py-3 px-2 rounded-xl relative left-90 bottom-65 lg:left-120 lg:bottom-85">
							<HugeiconsIcon icon={Location01FreeIcons} className="text-black font-bold" />
						</div>

						<div className="flex justify-between px-5">
							<h2 className="text-3xl">Location</h2>
							<p className="text-sm w-40 text-gray-400">1234 FITNESS AVENUE, LONDON CA0001</p>
						</div>
					</div>
				</div>

				<section className="relative w-full h-65 overflow-hidden mt-25 bg-black">
					<img src={image} alt="gym" className="absolute inset-0 w-full h-full object-cover" />

					<div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />

					<div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
						<div className="text-white max-w-xl">
							<h2 className="text-5xl font-semibold leading-tight">
								Let’s Join
								<br />
								<span className="font-bold">Membership</span>
							</h2>

							<div className="flex gap-4 mt-6">
								<button className="bg-green-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-green-300 transition">
									JOIN NOW
								</button>

								<button className="border border-white/30 px-6 py-3 rounded-md hover:border-white hover:bg-white hover:text-black transition">
									JOIN FREE TRIAL
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</section>
	);
};

export default Home;
