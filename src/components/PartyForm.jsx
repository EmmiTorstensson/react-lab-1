import { useState } from "react";

const PartyForm = (props) => {
	const [formData, setFormData] = useState({
		input_theme: "",
		input_food: "",
		input_music: "",
	})

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.setNewTheme(formData)
	}

	return (
		<form onSubmit={handleSubmit} className="theme-form">
			<h2>Skicka in ett eget tema:</h2>
			<input 
				type="text" 
				name="input_theme"
				value={formData.input_theme}
				placeholder="Tema"
				onChange={handleChange}
				required
			/>
			<input 
				type="text" 
				name="input_food"
				placeholder="Mat"
				onChange={handleChange}
				required
			/>
			<input 
				type="text"
				name="input_music"
				placeholder="Musik"
				onChange={handleChange}
				required
			/>
			<button 
				type="submit">
				Skicka
			</button>
		</form>
	)
}

export default PartyForm;