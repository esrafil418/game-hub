import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";

export default function Verify() {
	const [searchParams, setSearchParams] = useSearchParams();
	const success = searchParams.get("success");
	const orderId = searchParams.get("orderId");
	const { URL } = useContext(StoreContext);
	const navigate = useNavigate();

	const verifyPayment = async () => {
		try {
			const response = await axios.post(URL + "/api/order/verify", {
				success,
				orderId,
			});
			if (response.data.success) {
				navigate("/myorders");
				return;
			}
		} catch {
			// fall through to failure navigation
		}
		navigate("/");
	};

	useEffect(() => {
		verifyPayment();
	}, []);

	return (
		<div className="min-h-[60vh] grid place-items-center">
			<div className="w-12 h-12 border-4 border-turquoise border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
}
