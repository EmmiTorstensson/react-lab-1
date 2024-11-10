import { useEffect, useState } from "react";
import PartyDisplay from "./PartyDisplay";
import PartyForm from  "./PartyForm";

const themeList = [
	"90-tals",
	"80-tals",
	"maskerad",
	"disco",
	"hollywood",
	"disney",
]

const foodList = [
	"pizza",
	"sushi",
	"korv med bröd",
	"hamburgare",
	"chark",
	"knytkalas",
]

const musicList = [
	"hårdrock 🎸",
	"techno 🆘",
	"disco 🪩",
	"epa-dunk 🦄",
	"klassiskt 🎻",
	"tryckare ❤️‍🔥",
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
				<button onClick={generateTheme}>🎉 Snurra för fest! 🎉</button>
			</div>
			<PartyDisplay theme={party.theme} food={party.food} music={party.music} />
			<PartyForm setNewTheme={setNewTheme} />
		</>
	)
}