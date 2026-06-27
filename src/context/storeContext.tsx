import { createContext, useEffect, useState, type ReactNode } from "react";
import { game_list } from "../assets/assets";
import type { GameItemProps } from "../components/game-item/GameItem";

interface StoreContextType {
	game_list: GameItemProps[];
	cartItems: { [key: number]: number };
	setCartItems: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
	addToCart: (itemId: number) => void;
	removeFromCart: (itemId: number) => void;
	getTotalCartAmount: () => number;
}

export const StoreContext = createContext<StoreContextType | null>(null);

interface StoreContextProviderProps {
	children: ReactNode;
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
	const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

	const addToCart = (itemId: number) => {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		}
	};

	const removeFromCart = (itemId: number) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				const itemInfo = game_list.find(
					(product) => product.id === Number(item),
				);
				if (itemInfo) {
					totalAmount += itemInfo.price * cartItems[item];
				}
			}
		}
		return totalAmount;
	};

	const contextValue: StoreContextType = {
		game_list,
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
		getTotalCartAmount,
	};

	return (
		<StoreContext.Provider value={contextValue}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
