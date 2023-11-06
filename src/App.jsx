import {useState} from 'react'
import Title from './components/Title/Title'

function App() {
	const [playerOne, setPlayerOne] = useState(false)
	const [playerTwo, setPlayerTwo] = useState(false)
	const [playerOnePoints, setPlayerOnePoints] = useState(0)
	const [playerTwoPoints, setPlayerTwoPoints] = useState(0)
	const [playerOneWin, setPlayerOneWin] = useState(false)
	const [playerTwoWin, setPlayerTwoWin] = useState(false)
	const [inputNamePlayer, setInputNamePlayer] = useState('')
	const [played, setPlayed] = useState([])
	const [equals, setEquals] = useState(false)

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
		setEquals(false)
		setPlayerOneWin(false)
		setPlayerTwoWin(false)
		if (verify.length === 2) {
			if (couples[0].some(pair => verify[0] === pair[0] && verify[1] === pair[1])) {
				setPlayerOnePoints(playerOnePoints + 1)
				setPlayerOneWin(true)
			} else if (couples[1].some(pair => verify[0] === pair[0] && verify[1] === pair[1])) {
				setPlayerTwoPoints(playerTwoPoints + 1)
				setPlayerTwoWin(true)
			} else if (couples[2].some(pair => verify[0] === pair[0] && verify[1] === pair[1])) {
				setEquals(true)
			}
			setPlayed([])
		} else {
			console.log('Invalid verify array')
		}
	}

	const couples = [
		[ // win
			['0', '2'],
			['1', '0'],
			['2', '1']
		],
		[ // lose
			['0', '1'],
			['1', '2'],
			['2', '0']
		],
		[ // null
			['0', '0'],
			['1', '1'],
			['2', '2']
		]
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
					<div className='point'>{ playerOnePoints }</div>
				</div>
				<div>
					<div className='player'>player two</div>
					<div className='playerName'>{ playerTwo }</div>
					<div className='point'>{ playerTwoPoints }</div>
				</div>
			</div>
			<div className='box-moves'>
				<div data-id="0" onClick={ getMoveId } className='move'>👊🏻</div>
				<div data-id="1" onClick={ getMoveId } className='move'>🤚🏻</div>
				<div data-id="2" onClick={ getMoveId } className='move'>✌🏻</div>
			</div>
			<div className='infoGame'>
				{ playerOneWin && <div className='win'>{ playerOne } you made one point!</div>}
				{ playerTwoWin && <div className='win'>{ playerTwo } you made one point!</div>}
				{ equals && <div>Nobody win</div>}
			</div>
		</div>
	)
}

export default App
