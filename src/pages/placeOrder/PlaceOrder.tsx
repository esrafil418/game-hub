import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export default function PlaceOrder() {
	const { getTotalCartAmount } = useContext(StoreContext);
	return (
		<form className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-3.5 mt-20 md:mt-25 px-4 md:px-6 lg:px-8">
			{/* Left - Delivery Information */}
			<div className="w-full lg:w-auto lg:max-w-[max(30%,500px)] flex-1">
				<p className="text-2xl md:text-3xl font-semibold mb-6 md:mb-12.5">
					Delivery Information
				</p>

				{/* First & Last Name - side by side on desktop */}
				<div className="flex flex-col sm:flex-row gap-2.5 mb-0">
					<div className="flex-1">
						<input
							type="text"
							placeholder="First Name"
							className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 sm:mb-12.5"
						/>
					</div>
					<div className="flex-1">
						<input
							type="text"
							placeholder="Last Name"
							className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 sm:mb-12.5"
						/>
					</div>
				</div>

				{/* Email & Street */}
				<input
					type="email"
					placeholder="Email Address"
					className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 md:mb-12.5"
				/>
				<input
					type="text"
					placeholder="Street"
					className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 md:mb-12.5"
				/>

				{/* City & State - side by side */}
				<div className="flex flex-col sm:flex-row gap-2.5">
					<div className="flex-1">
						<input
							type="text"
							placeholder="City"
							className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 sm:mb-12.5"
						/>
					</div>
					<div className="flex-1">
						<input
							type="text"
							placeholder="State"
							className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 sm:mb-12.5"
						/>
					</div>
				</div>

				{/* Zip Code & Country - side by side */}
				<div className="flex flex-col sm:flex-row gap-2.5">
					<div className="flex-1">
						<input
							type="text"
							placeholder="Zip Code"
							className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 sm:mb-12.5"
						/>
					</div>
					<div className="flex-1">
						<input
							type="text"
							placeholder="Country"
							className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-3 sm:mb-12.5"
						/>
					</div>
				</div>

				{/* Phone */}
				<input
					type="text"
					placeholder="Phone"
					className="w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-turquoise focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-colors duration-200 mb-4 md:mb-0"
				/>
			</div>

			{/* Right - Cart Total */}
			<div className="w-full lg:w-auto lg:min-w-75">
				<div className="cart mt-0 md:mt-0">
					<div className="flex flex-col gap-5">
						<p className="text-xl md:text-2xl font-bold">Cart Total</p>
						<div>
							<div className="flex justify-between text-gray-600">
								<p>Subtotal</p>
								<p>${getTotalCartAmount()}</p>
							</div>
							<hr className="my-2.5" />
							<div className="flex justify-between text-gray-600">
								<p>Delivery Fee</p>
								<p>${2}</p>
							</div>
							<hr className="my-2.5" />
							<div className="flex justify-between text-gray-600">
								<p className="font-bold">Total</p>
								<p>${getTotalCartAmount() + 2}</p>
							</div>
						</div>
						<button
							type="button"
							className="border-none text-white bg-turquoise w-full md:w-full py-3 rounded-sm cursor-pointer bg-teal-300 hover:bg-teal-500 hover:shadow-lg transition-all duration-200"
						>
							Proceed to Payment
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}
