import { useContext } from "react";
import { assets } from "../../assets/assets";
import { CircleMinus, CirclePlus } from "lucide-react";
import { StoreContext } from "../../context/storeContext";

export type GameItemProps = {
	id: number;
	name: string;
	price: number;
	desc: string;
	image: string;
	category_id?: number;
};

export default function GameItem({
	id,
	name,
	price,
	desc,
	image,
}: GameItemProps) {
	const context = useContext(StoreContext);

	if (!context) {
		return <div>Loading...</div>;
	}

	const { cartItems, addToCart, removeFromCart } = context;
	return (
		<div className="w-full mx-auto rounded-[15px] shadow-md transition duration-300 animate-[fadeIn_1s] p-2">
			<div className="relative">
				<img
					className="w-full rounded-t-[15px] rounded-b-[15px] rounded-bl-none"
					src={image}
					alt={name}
				/>
				{!cartItems[id] ? (
					<CirclePlus
						className="absolute bottom-3.5 right-3.5 cursor-pointer rounded-full bg-white"
						onClick={() => addToCart(id)}
					/>
				) : (
					<div className="absolute bottom-2 right-2 flex items-center gap-2.5 p-1.5 rounded-full bg-white shadow-lg hover:shadow-lg transition-shadow duration-200">
						<CircleMinus onClick={() => removeFromCart(id)} />
						<p>{cartItems[id]}</p>
						<CirclePlus onClick={() => addToCart(id)} />
					</div>
				)}
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
