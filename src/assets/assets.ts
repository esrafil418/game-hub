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
import play_store from "./parcel_icon.png";
import rating_starts from "./rating_starts.png";
import parcel_icon from "./parcel_icon.png";

interface Assets {
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
}

export const assets: Assets = {
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
} as const;
