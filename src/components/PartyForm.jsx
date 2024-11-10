import { useState } from "react";

const PartyForm = (props) => {
	const [formData, setFormData] = useState({
		input_theme: "",
		input_food: "",
		input_music: "",
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await props.setNewTheme(formData);
		} catch (error) {
			console.error("Error generating theme:", error)
		}

		setFormData({
			input_theme: "",
			input_food: "",
			input_music: "",
		});

		alert("Tack din lilla partymyra!\n Dina förslag åkte rakt in på partykontot!!")
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
				value={formData.input_food}
				placeholder="Mat"
				onChange={handleChange}
				required
			/>
			<input 
				type="text"
				name="input_music"
				value={formData.input_music}
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