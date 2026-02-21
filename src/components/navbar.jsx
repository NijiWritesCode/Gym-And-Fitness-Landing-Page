import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { EquipmentGym03Icon, Menu03FreeIcons } from "@hugeicons/core-free-icons";

const Navbar = () => {
	const [showSideBar, setShowSideBar] = useState(false);

	const toggleSidebar = () => {
		setShowSideBar(!showSideBar);
	};

	return (
		<>
			<nav className="bg-gray-900 w-[90%] lg:w-[85%] rounded-xl z-30 left-1/2 -translate-x-1/2 py-2 px-3 mx-auto flex justify-between fixed items-center">
				<div className="flex gap-2 items-centers">
					<HugeiconsIcon icon={EquipmentGym03Icon} className="text-green-500" size={45} />
					<p className="text-3xl text-green-500 font-semibold">fitnation</p>
				</div>

				<ul className="text-gray-200 hidden lg:flex gap-3 text-lg cursor-pointer">
					<li className="">Service</li>
					<li className="">Facility</li>
					<li className="">Merchandise</li>
				</ul>

				<button className="bg-green-400 hidden lg:flex px-3 py-2.5 rounded-tl-2xl hover:rounded-3xl transition-all duration-150 ease-in-out cursor-pointer ">
					JOIN NOW
				</button>

				<HugeiconsIcon
					icon={Menu03FreeIcons}
					className="text-white lg:hidden font-semibold"
					size={24}
					onClick={toggleSidebar}
				/>
			</nav>

			{showSideBar ? (
				<div className="fixed inset-0 bg-black/60 z-40" onClick={toggleSidebar}>
					<div
						onClick={(e) => e.stopPropagation()}
						className="relative text-white bg-gray-900 top-0 h-[50%] left-50 w-60 px-5 py-5 flex flex-col justify-between">
						<ul className="flex flex-col gap-5 text-xl">
							<li>Services</li>
							<li>Facility</li>
							<li>Merchandise</li>
						</ul>

						<button className="bg-green-400 px-4 py-2.5 rounded-3xl transition-all duration-150 ease-in-out cursor-pointer">
							JOIN NOW
						</button>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Navbar;
