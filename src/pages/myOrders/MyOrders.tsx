import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";
import { assets } from "../../assets/assets";

type OrderItem = {
	name: string;
	quantity: number;
};

type Order = {
	items: OrderItem[];
	amount: number;
	status: string;
	item: any[];
	_id: string;
};

export default function MyOrders() {
	const { URL, token } = useContext(StoreContext);
	const [data, setData] = useState<Order[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchOrders = async () => {
		setLoading(true);
		try {
			const response = await axios.post(
				URL + "/api/orders/userorders",
				{},
				{ headers: { token } },
			);
			setData(response.data.data);
		} catch (error) {
			console.error("Error fetching orders:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (token) {
			fetchOrders();
		}
	}, [token]);

	if (loading) {
		return (
			<div className="min-h-[60vh] grid place-items-center">
				<div className="w-12 h-12 border-4 border-turquoise border-t-transparent rounded-full animate-spin"></div>
			</div>
		);
	}

	if (data.length === 0) {
		return (
			<div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
				<img
					src={assets.parcel_icon}
					alt="No orders"
					className="w-20 h-20 opacity-50"
				/>
				<p className="text-[#808080] text-lg font-medium">No orders yet</p>
				<p className="text-[#a9a9a9] text-sm">Your orders will appear here</p>
			</div>
		);
	}

	return (
		<div className="w-[90%] sm:w-[80%] md:w-[70%] ml-4 sm:ml-6 md:ml-[max(5vw,25px)] mt-10 md:mt-12.5">
			<h2 className="text-[#262626] text-2xl font-semibold mb-6">My Orders</h2>

			<div className="flex flex-col gap-4">
				{data.map((order, index) => (
					<div
						key={index}
						className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-4 p-4 sm:px-6 sm:py-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 bg-white"
					>
						{/* Parcel Icon */}
						<img
							src={assets.parcel_icon}
							alt="parcel"
							className="w-12 h-12 object-contain"
						/>

						{/* Items List */}
						<p className="text-[#262626] text-sm sm:text-base">
							{order.items.map((item, idx) => (
								<span key={idx}>
									{item.name} x {item.quantity}
									{idx < order.items.length - 1 && ", "}
								</span>
							))}
						</p>

						{/* Amount */}
						<p className="text-tomato font-semibold text-lg">
							${order.amount}.00
						</p>

						{/* Items Count */}
						<p className="text-[#676767] text-sm">
							Items: {order.items.length}
						</p>

						{/* Status */}
						<div className="flex items-center gap-2">
							<span className="text-green-500 text-xl">●</span>
							<b className="text-[#262626] text-sm sm:text-base">
								{order.status}
							</b>
						</div>

						{/* Track Order Button */}
						<button
							type="button"
							className="col-span-1 sm:col-span-1 px-4 py-2 bg-[#49557e] text-white text-sm font-medium rounded-full hover:bg-[#5a6a8e] transition-colors duration-200 cursor-pointer"
						>
							Track Order
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
