import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [menu, setMenu] = useState("home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ id: "home", label: "Home" },
		{ id: "menu", label: "Menu" },
		{ id: "mobile app", label: "Mobile App" },
		{ id: "contact us", label: "Contact Us" },
	];

	return (
		<nav className="py-5 px-4 sm:px-8 flex justify-between items-center relative bg-white shadow-sm">
			<h2 className="font-bold text-2xl sm:text-3xl text-red-700">Game Hub</h2>

			{/* Desktop Menu */}
			<div className="hidden md:flex list-none gap-5 text-[#49557e] text-[18px]">
				{menuItems.map((item) => (
					<button
						key={item.id}
						type="button"
						onClick={() => setMenu(item.id)}
						className={
							menu === item.id
								? "pb-0.5 border-b-2 border-[#49557e] cursor-pointer"
								: "cursor-pointer hover:text-red-700 transition"
						}
					>
						{item.label}
					</button>
				))}
			</div>

			{/* Right Side Icons */}
			<div className="flex items-center gap-4 sm:gap-10">
				<Search className="w-5 h-5 cursor-pointer hover:text-red-700 transition" />
				<div className="relative">
					<ShoppingCart className="w-5 h-5 cursor-pointer hover:text-red-700 transition" />
					<div className="absolute min-w-2.5 min-h-2.5 bg-sky-300 rounded-md -top-2 -right-2"></div>
				</div>

				<button className="hidden sm:block bg-transparent text-[16px] text-[#49557e] border border-sky-300 px-6 sm:px-7.5 py-2.5 rounded-full cursor-pointer hover:bg-rose-50 hover:border-red-700 transition duration-300">
					Sign In
				</button>

				{/* Hamburger Menu Button */}
				<button
					className="md:hidden p-1"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden flex flex-col p-6 gap-4 text-[#49557e] z-50 border-t">
					{menuItems.map((item) => (
						<button
							type="button"
							key={item.id}
							onClick={() => {
								setMenu(item.id);
								setIsMenuOpen(false);
							}}
							className={`text-left py-2 text-lg ${
								menu === item.id ? "text-red-700 font-semibold" : ""
							}`}
						>
							{item.label}
						</button>
					))}
					<hr className="my-2" />
					<button
						type="button"
						className="border border-sky-300 px-6 py-3 rounded-full text-center hover:bg-rose-50 hover:border-red-700 transition"
					>
						Sign In
					</button>
				</div>
			)}
		</nav>
	);
}
