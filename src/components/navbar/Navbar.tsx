import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [menu, setMenu] = useState("home");
	return (
		<div className="py-5 flex justify-between items-center">
			<h2 className="font-bold text-3xl text-red-700">Game Hub</h2>
			<div className="flex list-none gap-5 text-[#49557e] text-[18px]">
				<button
					type="button"
					onClick={() => setMenu("home")}
					className={
						menu === "home"
							? "pb-0.5 border-b-2 border-[#49557e] cursor-pointer"
							: "cursor-pointer"
					}
				>
					home
				</button>
				<button
					type="button"
					onClick={() => setMenu("menu")}
					className={
						menu === "menu"
							? "pb-0.5 border-b-2 border-[#49557e] cursor-pointer"
							: "cursor-pointer"
					}
				>
					menu
				</button>
				<button
					type="button"
					onClick={() => setMenu("mobile app")}
					className={
						menu === "mobile app"
							? "pb-0.5 border-b-2 border-[#49557e] cursor-pointer"
							: "cursor-pointer"
					}
				>
					mobile app
				</button>
				<button
					type="button"
					onClick={() => setMenu("contact us")}
					className={
						menu === "contact us"
							? "pb-0.5 border-b-2 border-[#49557e] cursor-pointer"
							: "cursor-pointer"
					}
				>
					contact us
				</button>
			</div>
			<div className="flex items-center gap-10">
				<Search />
				<div className="relative">
					<ShoppingCart />
					<div className="absolute min-w-2.5 min-h-2.5 bg-sky-300 rounded-md -top-2 -right-2"></div>
				</div>
				<button
					type="button"
					className="bg-transparent text-[16px] text-[#49557e] border border-sky-300 px-7.5 py-2.5 rounded-full cursor-pointer hover:bg-rose-50 transition duration-300"
				>
					Sign In
				</button>
			</div>
		</div>
	);
}
