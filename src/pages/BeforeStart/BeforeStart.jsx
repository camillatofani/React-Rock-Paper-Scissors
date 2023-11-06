// Components
import Title from '../../components/Title/Title'
// Global state
import { useGlobalContext } from './../../GlobalContext'

function BeforeStart() {
	const { playerOne, inputNamePlayer, setNamePlayer, valueAction, confirmNamePlayer } = useGlobalContext()

	return (
		<div className='game'>
			<Title title={ 'Rock , paper or scissor?' } tag={ 'h1' } />
			Before start, please, enter the name of { !playerOne ? 'first' : 'second' } player
			<br />
			<input placeholder='Name' value={ inputNamePlayer } onChange={ setNamePlayer } onKeyDown={ valueAction }></input>
			<button onClick={ confirmNamePlayer }>{ !playerOne ? 'Save and insert the second player' : 'Go to the game' }</button>
		</div>
	)
}

export default BeforeStart
