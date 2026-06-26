import { createContext, useEffect, useState, type ReactNode } from "react";
import { game_list } from "../assets/assets";
import type { GameItemProps } from "../components/game-item/GameItem";

interface StoreContextType {
	game_list: GameItemProps[];
	cartItems: { [key: number]: number };
	setCartItems: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
	addToCart: (itemId: number) => void;
	removeFromCart: (itemId: number) => void;
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

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const contextValue: StoreContextType = {
		game_list,
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
	};

	return (
		<StoreContext.Provider value={contextValue}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
