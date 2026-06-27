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
	Ready_or_Not:
		"https://cdn.displate.com/artwork/2025-12-23/6fb2d0df-4999-4507-bddd-39f5916885d6.jpg?speedsize=w_480",
	Alan_Wake_II:
		"https://cdn.displate.com/artwork/324x454/2025-11-25/903e8584-8af9-4442-ad28-3cbda301dcb3.jpg",
	Dead_Space:
		"https://cdn.displate.com/artwork/324x454/2025-10-28/ade12073-2dcb-4649-98c2-79f87fb47e0a.jpg",
	Control:
		"https://cdn.displate.com/artwork/324x454/2025-07-08/697a2f2c-61bf-49cc-ab41-90097a5be19e.jpg",
	Satisfactory:
		"https://cdn.displate.com/artwork/324x454/2026-06-18/519f8ddd-8d61-4812-9c8b-0b2a8abeb9f7.jpg",
	Split_Fiction:
		"https://cdn.displate.com/artwork/324x454/2025-07-08/c7ee1558-2fc7-414c-b9a0-0e43f643e134.jpg",
	The_Evil_Within:
		"https://cdn.displate.com/artwork/324x454/2025-08-25/f94bd291-e2df-4ea4-9cb7-17adca985377.jpg",
	Warframe:
		"https://cdn.displate.com/artwork/324x454/2026-03-26/ad166489-07ff-43b0-a6a3-76d0ca83fd8f.jpg",
	Metro_Exodus:
		"https://cdn.displate.com/artwork/324x454/2026-06-01/ffbd81f8-a8c9-446d-bd84-0db5483db74c.jpg",
	Dying_Light_2:
		"https://cdn.displate.com/artwork/324x454/2025-10-28/91b91ad2-2ca4-4c5c-9c15-65008e87574a.jpg",
	Need_for_Speed_Heat:
		"https://cdn.displate.com/artwork/324x454/2026-06-01/42283ad4-c01c-4fbf-bf7c-030d58a38bdf.jpg",
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
	Ready_or_Not: string;
	Alan_Wake_II: string;
	Dead_Space: string;
	Control: string;
	Satisfactory: string;
	Split_Fiction: string;
	The_Evil_Within: string;
	Warframe: string;
	Metro_Exodus: string;
	Dying_Light_2: string;
	Need_for_Speed_Heat: string;
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
	Ready_or_Not: urlImages.Ready_or_Not,
	Alan_Wake_II: urlImages.Alan_Wake_II,
	Dead_Space: urlImages.Dead_Space,
	Control: urlImages.Control,
	Satisfactory: urlImages.Satisfactory,
	Split_Fiction: urlImages.Split_Fiction,
	The_Evil_Within: urlImages.The_Evil_Within,
	Warframe: urlImages.Warframe,
	Metro_Exodus: urlImages.Metro_Exodus,
	Dying_Light_2: urlImages.Dying_Light_2,
	Need_for_Speed_Heat: urlImages.Need_for_Speed_Heat,
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
		name: "Ready or Not",
		image: urlImages.Ready_or_Not,
		price: 50,
		desc: "Ready or Not is a 2023 tactical first-person shooter video game developed and published by Ireland-based VOID Interactive and released first for Microsoft Windows, and later for the PlayStation 5.",
		category_id: 1,
	},
	{
		id: 3,
		name: "Alan Wake II",
		image: urlImages.Alan_Wake_II,
		price: 87,
		desc: "Alan Wake 2 is a 2023 survival horror video game developed by Remedy Entertainment and published by Epic Games Publishing. ",
		category_id: 3,
	},
	{
		id: 4,
		name: "Dead Space",
		image: urlImages.Dead_Space,
		price: 80,
		desc: "Dead Space is a 2023 survival horror game developed by Motive Studio and published by Electronic Arts. A remake of the 2008 game of the same name developed by EA Redwood Shores, it is the first release in the Dead Space series since 2013's Dead Space 3.",
		category_id: 3,
	},
	{
		id: 5,
		name: "Control",
		image: urlImages.Control,
		price: 59,
		desc: "Control is a 2019 action-adventure game developed by Remedy Entertainment. It follows Jesse Faden, the new Director of the Federal Bureau of Control, a secret U.S. government agency that investigates and contains phenomena that violate the normal laws of reality.",
		category_id: 2,
	},
	{
		id: 6,
		name: "Satisfactory",
		image: urlImages.Satisfactory,
		price: 42,
		desc: "Satisfactory is a 2024 factory simulation game by Coffee Stain Studios for Windows, Xbox, and PlayStation. The player is dropped onto an alien planet with a handful of tools and must use the planet's natural resources to construct increasingly complex factories.",
		category_id: 2,
	},
	{
		id: 7,
		name: "Split Fiction",
		image: urlImages.Split_Fiction,
		price: 68,
		desc: "Split Fiction is a 2025 action-adventure game developed by Hazelight Studios and published by Electronic Arts.",
		category_id: 4,
	},
	{
		id: 8,
		name: "The Evil Within",
		image: urlImages.The_Evil_Within,
		price: 36,
		desc: "The Evil Within is a 2014 survival horror game developed by Tango Gameworks and published by Bethesda Softworks. It was directed by Resident Evil series creator Shinji Mikami.",
		category_id: 3,
	},
	{
		id: 9,
		name: "Warframe",
		image: urlImages.Warframe,
		price: 80,
		desc: "Warframe is a free-to-play action role-playing third-person shooter multiplayer online game developed and published by Digital Extremes.",
		category_id: 8,
	},
	{
		id: 10,
		name: "Metro Exodus",
		image: urlImages.Metro_Exodus,
		price: 63,
		desc: "Metro Exodus is a first-person shooter video game developed by 4A Games and published by Deep Silver in 2019. The game is the third installment in the Metro video game series, which is based on Dmitry Glukhovsky's novels.",
		category_id: 1,
	},
	{
		id: 11,
		name: "Dying Light 2",
		image: urlImages.Dying_Light_2,
		price: 79,
		desc: "Dying Light 2 Stay Human is a 2022 action role-playing survival horror game developed and published by Techland. The game is a sequel to Dying Light, and was released for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on February 4, 2022. A cloud version for the Nintendo Switch is in development.",
		category_id: 7,
	},
	{
		id: 11,
		name: "Need for Speed Heat",
		image: urlImages.Need_for_Speed_Heat,
		price: 66,
		desc: "Need for Speed Heat is a 2019 racing video game developed by Ghost Games and published by Electronic Arts for PlayStation 4, Windows, and Xbox One. It is the twenty-fourth installment in the Need for Speed series and commemorates the series' 25th anniversary.",
		category_id: 6,
	},
];
