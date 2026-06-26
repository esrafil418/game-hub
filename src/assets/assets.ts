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
