import action from "./Gaming-Cat/action.png";
import adventure from "./Gaming-Cat/adventure.png";
import horror from "./Gaming-Cat/horror.png";
import multiplayer from "./Gaming-Cat/multiplayer.png";
import puzzle from "./Gaming-Cat/puzzle.png";
import sports from "./Gaming-Cat/sports.png";
import zombies from "./Gaming-Cat/zombies.png";
import onlinebattle from "./Gaming-Cat/onlinebattle.png";

import header from "./header.jpg";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import rating_starts from "./rating_starts.png";
import parcel_icon from "./parcel_icon.png";

export const urlImages = {
	Black_Myth:
		"https://cdn.displate.com/artwork/324x454/2026-03-12/11e17cec-2aa9-402e-b1eb-ee3a188d818b.jpg",
} as const;

interface Assets {
	//! local img
	action: string;
	adventure: string;
	horror: string;
	multiplayer: string;
	puzzle: string;
	sports: string;
	zombies: string;
	onlinebattle: string;
	header: string;
	app_store: string;
	play_store: string;
	rating_starts: string;
	parcel_icon: string;
	//! url img
	Black_Myth: string;
}

export const assets: Assets = {
	//! local img
	action,
	adventure,
	horror,
	multiplayer,
	puzzle,
	sports,
	zombies,
	onlinebattle,
	header,
	app_store,
	play_store,
	rating_starts,
	parcel_icon,
	//! url img
	Black_Myth: urlImages.Black_Myth,
} as const;

export const category = [
	{
		category_id: 1,
		category_name: "Action",
		category_image: action,
	},
	{
		category_id: 2,
		category_name: "Adventure",
		category_image: adventure,
	},
	{
		category_id: 3,
		category_name: "Horror",
		category_image: horror,
	},
	{
		category_id: 4,
		category_name: "Multiplayer",
		category_image: multiplayer,
	},
	{
		category_id: 5,
		category_name: "Puzzle",
		category_image: puzzle,
	},
	{
		category_id: 6,
		category_name: "Sports",
		category_image: sports,
	},
	{
		category_id: 7,
		category_name: "Zombies",
		category_image: zombies,
	},
	{
		category_id: 8,
		category_name: "Online",
		category_image: onlinebattle,
	},
];

export const game_list = [
	{
		id: 1,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 2,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 3,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 4,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 5,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 6,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 7,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 8,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 9,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
	{
		id: 10,
		name: "Black Myth",
		image: urlImages.Black_Myth,
		price: 80,
		desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology and based on Journey to the West, one of the Four Great Classical Novels of Chinese literature",
		category_id: 1,
	},
];
