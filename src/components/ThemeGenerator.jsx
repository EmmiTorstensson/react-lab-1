import { useEffect, useState } from "react";
import PartyDisplay from "./PartyDisplay";
import PartyForm from  "./PartyForm";

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
	const [party, setParty] = useState([{
		theme: "90-tals fest", 
		food: "Pizza", 
		music: "Hårdrock"}])

	const generateTheme = () => {
		const newTheme = {			
			theme: themeList[Math.floor(Math.random() * themeList.length)],
			food: foodList[Math.floor(Math.random() * foodList.length)],
			music: musicList[Math.floor(Math.random() * musicList.length)]
		}
		setParty(newTheme);
	}

	return (
		<>
			<div>
			hej
				<button onClick={generateTheme}>Snurra fest!</button>
			</div>
			<PartyDisplay theme={party.theme} food={party.food} music={party.music} />
			<PartyForm />
		</>
	)
}