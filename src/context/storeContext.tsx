import { createContext, type ReactNode } from "react";
import { game_list } from "../assets/assets";
import type { GameItemProps } from "../components/game-item/GameItem";

interface StoreContextType {
	game_list: GameItemProps[];
}

export const StoreContext = createContext<StoreContextType | null>(null);

interface StoreContextProviderProps {
	children: ReactNode;
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
	const contextValue: StoreContextType = {
		game_list,
	};

	return (
		<StoreContext.Provider value={contextValue}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
