import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
	setShowLogin: (value: boolean) => void;
}

export default function Navbar({ setShowLogin }: NavbarProps) {
	const [menu, setMenu] = useState("home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ id: "home", label: "Home", href: "#" },
		{ id: "categories", label: "Categories", href: "#explore-category" },
		{ id: "mobile app", label: "Mobile App", href: "#app-download" },
		{ id: "contact us", label: "Contact Us", href: "#footer" },
	];

	// Smooth scroll function
	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);

		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}

		setIsMenuOpen(false);
	};

	return (
		<nav className="py-5 px-4 sm:px-8 flex justify-between items-center relative bg-white">
			<Link to="/">
				<div className="font-bold text-2xl sm:text-3xl text-red-700 hover:text-red-800 transition">
					Game Hub
				</div>
			</Link>

			{/* Desktop Menu */}
			<div className="hidden lg:flex list-none gap-5 text-[#49557e] text-[18px]">
				{menuItems.map((item) => (
					<a
						key={item.id}
						href={item.href}
						onClick={(e) => {
							handleScroll(e, item.href);
							setMenu(item.id);
						}}
						className={
							menu === item.id
								? "pb-0.5 border-b-2 border-[#49557e] cursor-pointer"
								: "cursor-pointer hover:text-red-700 transition"
						}
					>
						{item.label}
					</a>
				))}
			</div>

			{/* Right Side Icons */}
			<div className="flex items-center gap-4 sm:gap-10">
				<Search className="w-5 h-5 cursor-pointer hover:text-red-700 transition" />
				<div className="relative">
					<Link to="/cart">
						<ShoppingCart className="w-5 h-5 cursor-pointer hover:text-red-700 transition" />
					</Link>
					<div className="absolute min-w-2.5 min-h-2.5 bg-sky-300 rounded-md -top-2 -right-2"></div>
				</div>

				<button
					type="button"
					onClick={() => setShowLogin(true)}
					className="hidden sm:block bg-transparent text-[16px] text-[#49557e] border border-sky-300 px-6 sm:px-7.5 py-2.5 rounded-full cursor-pointer hover:bg-rose-50 hover:border-red-700 transition duration-300"
				>
					Sign In
				</button>

				{/* Hamburger Menu Button */}
				<button
					type="button"
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
						<a
							key={item.id}
							href={item.href}
							onClick={(e) => handleScroll(e, item.href)}
							className={`text-left py-2 text-lg ${
								menu === item.id
									? "text-red-700 font-semibold"
									: "hover:text-red-700"
							}`}
						>
							{item.label}
						</a>
					))}
					<hr className="my-2" />
					<button
						type="button"
						onClick={() => setShowLogin(true)}
						className="border border-sky-300 px-6 py-3 rounded-full text-center hover:bg-rose-50 hover:border-red-700 transition"
					>
						Sign In
					</button>
				</div>
			)}
		</nav>
	);
}
