import { Link, Link2, Rss } from "lucide-react";

export default function Footer() {
	return (
		<div
			className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 px-5 sm:px-[8vw] py-5 pt-20 mt-25"
			id="footer"
		>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-20">
				<div className="flex flex-col items-start gap-5">
					<h3 className="text-3xl text-red-700">Game hub</h3>
					<p>
						Your ultimate destination for premium gaming experiences. We curate
						the best games across all genres - from action-packed adventures to
						immersive RPGs. Join our community of gamers today!
					</p>
					<div className="flex gap-2">
						<Rss className="cursor-pointer" />
						<Link className="cursor-pointer" />
						<Link2 className="cursor-pointer" />
					</div>
				</div>
				<div className="flex flex-col items-start gap-5">
					<h2 className="text-3xl text-white">Company</h2>
					<ul>
						<li className="mb-2.5 cursor-pointer">Home</li>
						<li className="mb-2.5 cursor-pointer">About us</li>
						<li className="mb-2.5 cursor-pointer">Support</li>
						<li className="mb-2.5 cursor-pointer">Privacy policy</li>
					</ul>
				</div>
				<div className="flex flex-col items-start gap-5">
					<h2 className="text-3xl text-white">Get in Touch</h2>
					<ul>
						<li>📞 +1 (555) 123-4567</li>
						<li className="cursor-pointer">support@gamehub.com</li>
					</ul>
				</div>
			</div>
			<hr className="w-full h-0.5 my-5 bg-sky-300 border-none" />
			<p className="copyright">
				Copyright {new Date().getFullYear()}. GameHub.com - All Right Reserved
			</p>
		</div>
	);
}
