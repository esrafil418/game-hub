import { X } from "lucide-react";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";

type LoginPopupProps = {
	setShowLogin: (value: boolean) => void;
};

type LoginData = {
	name: string;
	email: string;
	password: string;
};

export default function LoginPopup({ setShowLogin }: LoginPopupProps) {
	const { URL, setToken } = useContext(StoreContext);

	const [currentState, setCurrentState] = useState("Login");

	const [data, setData] = useState<LoginData>({
		name: "",
		email: "",
		password: "",
	});

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

	const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let newUrl = URL;
		if (currentState === "Login") {
			newUrl += "/api/user/login";
		} else {
			newUrl += "/api/user/register";
		}

		const response = await axios.post(newUrl, data);

		if (response.data.success) {
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);
			setShowLogin(false);
		} else {
			alert(response.data.message);
		}
	};

	return (
		<div className="absolute z-100 w-full h-full bg-black/90 grid">
			<form
				onSubmit={onLogin}
				className="place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-5.5 p-6 rounded-lg text-sm animate-[FadeIn_0.5s] shadow-lg"
			>
				<div className="flex justify-between items-center text-black">
					<div className="text-xl font-bold">{currentState}</div>
					<X onClick={() => setShowLogin(false)} className="cursor-pointer" />
				</div>
				<div className="flex flex-col gap-4 md:gap-5">
					{currentState === "Login" ? null : (
						<input
							name="name"
							onChange={onChangeHandler}
							value={data.name}
							className="outline-none border border-[#c9c9c9] p-2.5 rounded-sm w-full focus:border-[#49557e] focus:ring-2 focus:ring-[#49557e]/20 transition-colors duration-200"
							type="text"
							placeholder="Your Name"
							required
						/>
					)}

					<input
						name="email"
						onChange={onChangeHandler}
						value={data.email}
						className="outline-none border border-[#c9c9c9] p-2.5 rounded-sm w-full focus:border-[#49557e] focus:ring-2 focus:ring-[#49557e]/20 transition-colors duration-200"
						type="email"
						placeholder="Your Email"
						required
					/>
					<input
						name="password"
						onChange={onChangeHandler}
						value={data.password}
						className="outline-none border border-[#c9c9c9] p-2.5 rounded-sm w-full focus:border-[#49557e] focus:ring-2 focus:ring-[#49557e]/20 transition-colors duration-200"
						type="password"
						placeholder="Your Password"
						required
					/>
				</div>
				<button
					type="submit"
					className="border-none p-2.5 rounded-sm text-black bg-turquoise cursor-pointer text-[15px] bg-teal-200 hover:bg-teal-400 hover:shadow-md transition-all duration-200"
				>
					{currentState === "Sign Up" ? "Create account" : "Login"}
				</button>
				<div className="flex items-start gap-2 -mt-3.75 md:gap-3">
					<label htmlFor="agree-terms" className="flex items-center gap-2">
						<input type="checkbox" id="agree-terms" required />I agree to the
						terms of use.
					</label>
				</div>
				{currentState === "Login" ? (
					<p>
						Create a new account?{" "}
						<button
							type="button"
							className="text-red-700 font-medium cursor-pointer"
							onClick={() => setCurrentState("Sign Up")}
						>
							Click here
						</button>
					</p>
				) : (
					<p>
						Already have an account?{" "}
						<button
							type="button"
							className="text-red-700 font-medium cursor-pointer"
							onClick={() => setCurrentState("Login")}
						>
							Login here
						</button>
					</p>
				)}
			</form>
		</div>
	);
}
