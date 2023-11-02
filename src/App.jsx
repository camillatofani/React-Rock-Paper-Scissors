import {useState} from 'react'
import Title from './components/Title/Title'

function App() {
	const [playerOne, setPlayerOne] = useState(false)
	const [playerTwo, setPlayerTwo] = useState(false)
	const [inputNamePlayer, setInputNamePlayer] = useState('')
	const [played, setPlayed] = useState([])

	// Logic for the player name
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

	// Logic for the game
	function getMoveId(e) {
		var playedNow = e.target.dataset.id
		setPlayed(prev => [...prev, playedNow])
		const verify = [...played, playedNow]
		whoWin(verify)
	}
	function whoWin(verify) {
		if (verify.length === 2) {
			couples.forEach(coup => {
				if (verify[0] === coup[0]) {
					if (verify[1] === coup[1]) {
						console.log('you win')
					}
				}
			})
			console.log('verify', verify)
			setPlayed([])
		}
	}

	// 0 = equals, 1 = lose, 2 = win (playerOne)
	const couples = [
		['0', '2'],
	]

	if (!playerOne || !playerTwo) {
		return (
			<div className='game'>
				<Title title={ 'Rock , paper or scissor?' } tag={ 'h1' } />
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
				<div>
					<div className='player'>player one</div>
					<div className='playerName'>{ playerOne }</div>
				</div>
				<div>
					<div className='player'>player two</div>
					<div className='playerName'>{ playerTwo }</div>
				</div>
			</div>
			<div className='box-moves'>
				<div data-id="0" onClick={ getMoveId } className='move'>👊🏻</div>
				<div data-id="1" onClick={ getMoveId } className='move'>🤚🏻</div>
				<div data-id="2" onClick={ getMoveId } className='move'>✌🏻</div>
			</div>
			{ couples.map((single, index) => (
				<p key={ index }>one: { single.one }, two: { single.two }, win: { single.win }</p>
			)) }
		</div>
	)
}

export default App
