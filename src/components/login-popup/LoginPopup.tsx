import { X } from "lucide-react";
import { useState } from "react";

type LoginPopupProps = {
	setShowLogin: (value: boolean) => void;
};

export default function LoginPopup({ setShowLogin }: LoginPopupProps) {
	const [currentState, setCurrentState] = useState("Sign Up");
	return (
		<div className="absolute z-100 w-full h-full bg-black/90 grid">
			<form className="place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-5.5 p-6 rounded-lg text-sm animate-[FadeIn_0.5s] shadow-lg">
				<div className="flex justify-between items-center text-black">
					<div className="text-xl font-bold">{currentState}</div>
					<X onClick={() => setShowLogin(false)} className="cursor-pointer" />
				</div>
				<div className="flex flex-col gap-4 md:gap-5">
					{currentState === "Login" ? null : (
						<input
							className="outline-none border border-[#c9c9c9] p-2.5 rounded-sm w-full focus:border-[#49557e] focus:ring-2 focus:ring-[#49557e]/20 transition-colors duration-200"
							type="text"
							placeholder="Your Name"
							required
						/>
					)}

					<input
						className="outline-none border border-[#c9c9c9] p-2.5 rounded-sm w-full focus:border-[#49557e] focus:ring-2 focus:ring-[#49557e]/20 transition-colors duration-200"
						type="email"
						placeholder="Your Email"
						required
					/>
					<input
						className="outline-none border border-[#c9c9c9] p-2.5 rounded-sm w-full focus:border-[#49557e] focus:ring-2 focus:ring-[#49557e]/20 transition-colors duration-200"
						type="password"
						placeholder="Your Password"
						required
					/>
				</div>
				<button
					type="button"
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
