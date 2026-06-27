import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import type { GameItemProps } from "../../components/game-item/GameItem";
import { X } from "lucide-react";

export default function Cart() {
	const { cartItems, game_list, removeFromCart } = useContext(StoreContext);
	return (
		<div className="mt-25">
			<div className="items">
				<div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{game_list.map(
					(item: GameItemProps) =>
						cartItems[item.id] > 0 && (
							<div
								key={item.id}
								className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-4 py-4 border-b border-gray-200"
							>
								<img
									src={item.image}
									alt="item"
									className="w-16 h-16 object-cover rounded"
								/>
								<p>{item.name}</p>
								<p>${item.price}</p>
								<p>{cartItems[item.id]}</p>
								<p>${item.price * cartItems[item.id]}</p>
								<X
									className="cursor-pointer"
									onClick={() => removeFromCart(item.id)}
								/>
							</div>
						),
				)}
			</div>
		</div>
	);
}
