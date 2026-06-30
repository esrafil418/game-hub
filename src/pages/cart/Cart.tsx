import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import type { GameItemProps } from "../../components/game-item/GameItem";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
	const { cartItems, game_list, removeFromCart, getTotalCartAmount, URL } =
		useContext(StoreContext);

	const navigate = useNavigate();

	return (
		<div className="mt-25 px-4 md:px-6 lg:px-8">
			<div className="items">
				{/* Desktop header */}
				<div className="hidden md:grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br className="hidden md:block" />
				<hr className="hidden md:block" />

				{game_list.map(
					(item: GameItemProps) =>
						cartItems[item._id] > 0 && (
							<div
								key={item._id}
								className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-start md:items-center gap-2 md:gap-4 py-4 border-b border-gray-200"
							>
								{/* Image */}
								<img
									src={URL + "/images/" + item.image}
									alt={item.name}
									className="w-16 h-16 object-cover rounded col-span-1 self-center"
								/>

								{/* Mobile layout */}
								<div className="md:hidden flex flex-col col-span-1 justify-center">
									<p className="font-medium text-sm">{item.name}</p>
									<div className="flex flex-wrap items-center gap-2 mt-0.5">
										<span className="text-sm text-gray-600">${item.price}</span>
										<span className="text-sm">Qty: {cartItems[item._id]}</span>
										<span className="font-bold text-sm">
											${item.price * cartItems[item._id]}
										</span>
									</div>
								</div>

								{/* Desktop layout */}
								<p className="hidden md:block">{item.name}</p>
								<p className="hidden md:block">${item.price}</p>
								<p className="hidden md:block">{cartItems[item._id]}</p>
								<p className="hidden md:block">
									${item.price * cartItems[item._id]}
								</p>

								{/* Remove button */}
								<button
									type="button"
									aria-label={`Remove ${item.name} from cart`}
									onClick={() => removeFromCart(item._id)}
									className="justify-self-end md:justify-self-center self-start md:self-center cursor-pointer border-none bg-transparent p-0"
								>
									<X aria-hidden="true" />
								</button>
							</div>
						),
				)}
			</div>

			<div className="cart mt-10 md:mt-20 flex flex-col md:flex-row justify-between gap-6 md:gap-4 lg:gap-[max(12vw,20px)]">
				<div className="flex flex-1 flex-col gap-5">
					<p className="text-xl md:text-2xl font-bold">Cart Total</p>
					<div>
						<div className="flex justify-between text-gray-600">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr className="my-2.5" />
						<div className="flex justify-between text-gray-600">
							<p>Delivery Fee</p>
							<p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
						</div>
						<hr className="my-2.5" />
						<div className="flex justify-between text-gray-600">
							<p className="font-bold">Total</p>
							<p>
								${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
							</p>
						</div>
					</div>
					<button
						type="button"
						onClick={() => navigate("/order")}
						className="border-none text-white w-full md:w-[max(15vw,200px)] py-3 rounded-sm cursor-pointer bg-teal-300 hover:bg-teal-500 hover:shadow-lg transition-all duration-200"
					>
						Proceed to Checkout
					</button>
				</div>
				<div className="flex-1 mt-4 md:mt-0">
					<div>
						<p className="text-gray-600 text-sm md:text-base">
							If you have a promo code, Enter it here
						</p>
						<label className="mt-2.5 flex justify-between items-center bg-gray-200 rounded-sm p-2 md:p-4">
							<input
								type="text"
								placeholder="promo code"
								className="bg-transparent border-none outline-none pl-2.5 text-sm md:text-base flex-1"
							/>
							<button
								type="button"
								className="border-none rounded-sm cursor-pointer font-bold px-3 py-1 md:px-4 md:py-2 bg-teal-300 hover:bg-teal-500 transition-colors"
							>
								Submit
							</button>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
