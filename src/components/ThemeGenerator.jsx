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
		theme: "", 
		food: "", 
		music: ""}])

	useEffect(() => {
		generateTheme();
	}, []);

	const generateTheme = () => {
		const newTheme = {			
			theme: themeList[Math.floor(Math.random() * themeList.length)],
			food: foodList[Math.floor(Math.random() * foodList.length)],
			music: musicList[Math.floor(Math.random() * musicList.length)]
		}
		setParty(newTheme);
	}

	const setNewTheme = (formData) => {
		themeList.push(formData.input_theme)
		foodList.push(formData.input_food)
		musicList.push(formData.input_music)

		console.log(themeList, foodList, musicList)

	};

	return (
		<>
			<div>
				<button onClick={generateTheme}>Snurra för fest!</button>
			</div>
			<PartyDisplay theme={party.theme} food={party.food} music={party.music} />
			<PartyForm setNewTheme={setNewTheme} />
		</>
	)
}