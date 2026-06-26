import { assets, category } from "../../assets/assets";

export type GameItemProps = {
	id: number;
	name: string;
	price: number;
	desc: string;
	image: string;
};

export default function GameItem({ name, price, desc, image }: GameItemProps) {
	return (
		<div className="w-full mx-auto rounded-[15px] shadow-md transition duration-300 animate-[fadeIn_1s] p-2">
			<div className="game-item-img-container">
				<img
					className="w-full rounded-t-[15px] rounded-b-[15px] rounded-bl-none"
					src={image}
					alt={name}
				/>
			</div>
			<div className="py-5">
				<div className="flex justify-between items-center mb-2.5">
					<p className="text-xl font-medium">{name}</p>
					<img
						src={assets.rating_starts}
						alt="rating_starts"
						className="w-16"
					/>
				</div>
				<p className="text-gray-500 text-xs">{desc}</p>
				<p className="text-red-500 text-xl font-medium my-2.5">${price}</p>
			</div>
		</div>
	);
}
