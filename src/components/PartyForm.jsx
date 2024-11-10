const PartyForm = () => {

	const handleSubmit = (e) => {
		e.preventDefault;

		console.log("skickat!")
	}

	return (
		<form onSubmit={handleSubmit} className="theme-form">
			<h2>Skicka in ett eget tema:</h2>
			<input 
				type="text" 
				name="input_theme"
				placeholder="Tema"
				required
			/>
			<input 
				type="text" 
				name="input_food"
				placeholder="Mat"
				required
			/>
			<input 
				type="text"
				name="input_music"
				placeholder="Musik"
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