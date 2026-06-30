import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import { category } from "../../assets/assets";
import GameItem, { type GameItemProps } from "../game-item/GameItem";

type GamesProps = {
	genre: string;
};

export default function Games({ genre }: GamesProps) {
	const context = useContext(StoreContext);

	if (!context) {
		return (
			<div className="mt-7.5" id="game-display">
				<h2 className="text-2xl md:text-3xl lg:text-[max(2vw,24px)] font-semibold">
					Top Games
				</h2>
				<p className="text-gray-500">Loading...</p>
			</div>
		);
	}

	const { game_list } = context;

	// Find the category ID based on the genre name
	const selectedCategory = category.find((cat) => cat.category_name === genre);
	const categoryId = selectedCategory?.category_id;

	// Filter games by category_id
	const filteredGames =
		genre === "All"
			? game_list
			: game_list.filter((item: GameItemProps) => item.category === genre);

	if (!filteredGames || filteredGames.length === 0) {
		return (
			<div className="mt-7.5" id="game-display">
				<h2 className="text-2xl md:text-3xl lg:text-[max(2vw,24px)] font-semibold">
					Top Games
				</h2>
				<p className="text-gray-500">No games available in this category</p>
			</div>
		);
	}

	return (
		<div className="mt-7.5" id="game-display">
			<h2 className="text-2xl md:text-3xl lg:text-[max(2vw,24px)] font-semibold">
				Top Games
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7.5 gap-7.5 gap-y-12.5">
				{filteredGames.map((item: GameItemProps) => (
					<GameItem
						key={item._id}
						_id={item._id}
						name={item.name}
						price={item.price}
						description={item.description}
						image={item.image}
					/>
				))}
			</div>
		</div>
	);
}
