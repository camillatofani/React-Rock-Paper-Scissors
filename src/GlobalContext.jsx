import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext()
const GlobalProvider = GlobalContext.Provider

export function useGlobalContext() {
	return useContext(GlobalContext)
}

export function GlobalProviderComponent({ children }) {
	// Utility
	const [inputNamePlayer, setInputNamePlayer] = useState('')
	const [played, setPlayed] = useState([])
	const [equals, setEquals] = useState(false)
	// PlayerOne
	const [playerOne, setPlayerOne] = useState(false)
	const [playerOnePoints, setPlayerOnePoints] = useState(0)
	const [playerOneWin, setPlayerOneWin] = useState(false)
	// PlayerTwo
	const [playerTwo, setPlayerTwo] = useState(false)
	const [playerTwoWin, setPlayerTwoWin] = useState(false)
	const [playerTwoPoints, setPlayerTwoPoints] = useState(0)

	// Logic for the player name
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}
	function setNamePlayer(e) {
		setInputNamePlayer(capitalizeFirstLetter(e.target.value))
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
		}
	}
	const couples = [
		[['0', '2'], ['1', '0'], ['2', '1']],
		[['0', '1'], ['1', '2'], ['2', '0']],
		[['0', '0'], ['1', '1'], ['2', '2']]
	]
	// Global Values
	const globalValues = {
		playerOne, playerTwo, inputNamePlayer, setNamePlayer, valueAction, confirmNamePlayer, equals, playerOneWin, playerOnePoints, playerTwoWin, playerTwoPoints, getMoveId
	}

	return <GlobalProvider value={ globalValues }>{ children }</GlobalProvider>
}

GlobalProviderComponent.propTypes = {
	children: PropTypes.any
}
