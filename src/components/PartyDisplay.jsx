
const PartyDisplay = (props) => {
	return (
		<div className="theme-values">
			<p>Det blir en <span>{props.theme}</span> fest!</p>
			<p>Där ni kommer att käka <span>{props.food}</span>. Mmm.. vad gott!</p>
			<p>Hela natten spelas <span>{props.music}</span></p>
		</div>
	)
}

export default PartyDisplay;