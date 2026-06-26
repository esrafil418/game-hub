import { useState } from "react";
import Header from "../../components/header/Header";
import ExploreCategory from "../../components/explore-menu/ExploreCategory";

export default function Home() {
	const [categorylist, setCategorylist] = useState("All");
	return (
		<div>
			<Header />
			<ExploreCategory
				categorylist={categorylist}
				setCategorylist={setCategorylist}
			/>
		</div>
	);
}
