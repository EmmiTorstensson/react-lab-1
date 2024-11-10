import { useState } from "react";
import PartyDisplay from "./PartyDisplay";
import PartyForm from "./PartyForm";

const themeList = [
	"90-tals fest",
	"80-tals fest",
	"Maskerad",
	"Disco",
	"Hollywood",
	"Disney",
]

const foodList = [
	"Pizza",
	"Sushi",
	"Korv med bröd",
	"Hamburgare",
	"Chark",
	"Knytkalas",
]

const musicList = [
	"Hårdrock",
	"Techno",
	"Disco",
	"Epa-dunk",
	"Klassiskt",
	"Tryckare",
]


export const ThemeGenerator = () => {
	const [theme, setTheme] = useState(["90-tals fest", "Pizza", "Hårdrock"])

	const generateTheme = () => {
		const theme = themeList[Math.floor(Math.random() * themeList.length)];
		const food = foodList[Math.floor(Math.random() * foodList.length)];
		const music = musicList[Math.floor(Math.random() * musicList.length)];

		setTheme(theme, food, music);
	}

	return (
		<>
			<div>
				<button onClick={generateTheme}>Snurra fest!</button>
			</div>
			<PartyDisplay theme={theme.theme} food={theme.food} music={theme.music} />
			<PartyForm />
		</>
	)
}