import { assets } from "../../assets/assets";

export default function AppDownload() {
	return (
		<div
			className="mx-auto mt-25 text-2xl md:text-3xl lg:text-[max(3vw,20px)] text-center font-medium"
			id="app-download"
		>
			<p>
				For Better Experience Download <br /> GameHub App
			</p>
			<div className="flex justify-center gap-2.5 md:gap-5 lg:gap-[max(2vw,10px)] mt-10">
				<img
					src={assets.play_store}
					alt="play_store"
					className="w-[max(30vw,120px)] max-w-45 transition duration-500 cursor-pointer hover:scale-105"
				/>
				<img
					src={assets.app_store}
					alt="app_store"
					className="w-[max(30vw,120px)] max-w-45 transition duration-500 cursor-pointer hover:scale-105"
				/>
			</div>
		</div>
	);
}
