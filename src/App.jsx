import {useState} from 'react'
import Title from './components/Title/Title'

function App() {
	const [playerOne, setPlayerOne] = useState(false)
	const [playerTwo, setPlayerTwo] = useState(false)
	const [inputNamePlayer, setInputNamePlayer] = useState('')

	function getMoveId(e) {
		console.log(e.target.dataset.id)
	}

	function setNamePlayer(e) {
		setInputNamePlayer(e.target.value)
	}

	function confirmNamePlayer() {
		if (!playerOne) {
			setPlayerOne(inputNamePlayer)
			setInputNamePlayer('')
		} else {
			setPlayerTwo(inputNamePlayer)
		}
	}

	function valueAction(e) {
		if (e.keyCode === 13) {
			confirmNamePlayer()
		}
	}

	if (!playerOne || !playerTwo) {
		return (
			<div className='game'>
				<Title title={ 'Rock, paper or scissor?' } tag={ 'h1' } />
				Before start, please, enter the name of { !playerOne ? 'first' : 'second' } player
				<br />
				<input placeholder='Name' value={ inputNamePlayer } onChange={ setNamePlayer } onKeyDown={ valueAction }></input>
				<br />
				<br />
				<button onClick={ confirmNamePlayer }>{ !playerOne ? 'Save and insert the second player' : 'Go to the game' }</button>
			</div>
		)
	}

	return (
		<div className='game'>
			<Title title={ 'Rock, paper or scissor?' } tag={ 'h1' } />
			<div className='info'>
				<div>player { playerOne }</div>
				<div>player { playerTwo }</div>
			</div>
			<div className='box-moves'>
				<div data-id="0" onClick={ getMoveId } className='move'>👊🏻</div>
				<div data-id="1" onClick={ getMoveId } className='move'>🤚🏻</div>
				<div data-id="2" onClick={ getMoveId } className='move'>✌🏻</div>
			</div>
		</div>
	)
}

export default App
