export default function Header() {
	return (
		<div className="relative h-[50vh] sm:h-[40vh] md:h-[34vw] my-7.5 mx-auto bg-no-repeat bg-cover bg-center header-img">
			<div className="absolute inset-0 bg-black/30 md:bg-transparent" />{" "}
			{/* Overlay for readability */}
			<div className="absolute flex flex-col items-start gap-3 sm:gap-4 md:gap-[1.5vw] max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] bottom-[10%] left-[5%] sm:left-[6vw] md:left-[8vw] lg:left-[10vw] animate-[fadeIn_3s]">
				<h2 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[4.5vw] xl:text-[5vw] leading-tight drop-shadow-lg">
					Order your Game
				</h2>

				<p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-[1vw] max-w-full sm:max-w-[90%] drop-shadow-md leading-relaxed">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
					tempore rerum esse provident dolores quis cupiditate animi corporis
					corrupti pariatur.
				</p>

				<button
					type="button"
					className="border-none text-[#49557e] font-medium px-6 py-2.5 sm:px-8 sm:py-3 md:px-[2.3vw] md:py-[1vw] bg-white/95 backdrop-blur-sm text-sm sm:text-base md:text-[max(1vw,14px)] rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-xl shadow-md active:scale-95"
				>
					View Category
				</button>
			</div>
		</div>
	);
}
