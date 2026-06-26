import { useState } from "react";
import Header from "../../components/header/Header";
import ExploreCategory from "../../components/explore-menu/ExploreCategory";
import Games from "../../components/games/Games";

export default function Home() {
	const [genre, setGenre] = useState("All");
	return (
		<div>
			<Header />
			<ExploreCategory genre={genre} setGenre={setGenre} />
			<Games genre={genre} />
		</div>
	);
}
