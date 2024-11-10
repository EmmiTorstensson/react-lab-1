import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
		<div className='hero'>
			<h1>Partycentralen</h1>
			<p>Skapa en unik fest med partycentralens slumpgenerator!</p>
		</div>
		<div>
			<button>Snurra fest!</button>
		</div>
		<div>
			<p>Du ska ha en 90-tals fest</p>
			<p>och servera pizza</p>
			<p>medans ni lyssnar på hårdrock</p>
		</div>
		<div>
			<form>
				<h2>Skapa ett eget tema</h2>
				<input></input>
			</form>
		</div>
    </>
  )
}

export default App
