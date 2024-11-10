
const PartyDisplay = (props) => {
	return (
		<div>
			<p>Tema: {props.theme}</p>
			<p>Mat: {props.food}</p>
			<p>Musik: {props.music}</p>
		</div>
	)
}

export default PartyDisplay;