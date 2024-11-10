import { ThemeGenerator } from './components/ThemeGenerator'
import './App.css'

function App() {

  return (
    <>
		<div className='hero'>
			<h1>🪩 Partycentralen 🪩</h1>
			<p>Skapa en unik fest med partycentralens slumpgenerator!</p>
		</div>
		<ThemeGenerator />
    </>
  )
}

export default App
