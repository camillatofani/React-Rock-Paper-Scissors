// Components
import Title from './../../components/Title/Title'
import Moves from './../../components/Moves/Moves'
import WinMessage from './../../components/WinMessage/WinMessage'
import InfoPlayer from './../../components/InfoPlayer/InfoPlayer'
// Global state
import { useGlobalContext } from './../../GlobalContext'

function TheGame() {
	const { playerOne, playerTwo, equals, playerOneWin, playerOnePoints, playerTwoWin, playerTwoPoints, getMoveId } = useGlobalContext()

	return (
		<div className='game'>
			<Title title={ 'Rock, paper or scissor?' } tag={ 'h1' } />
			<div className='info'>
				<InfoPlayer player={ 'player one' } name={ playerOne } point={ playerOnePoints } />
				<InfoPlayer player={ 'player two' } name={ playerTwo } point={ playerTwoPoints } />
			</div>
			<div className='box-moves'>
				<Moves id={ 0 } getMoveId={ getMoveId }>👊🏻</Moves>
				<Moves id={ 1 } getMoveId={ getMoveId }>🤚🏻</Moves>
				<Moves id={ 2 } getMoveId={ getMoveId }>✌🏻</Moves>
			</div>
			<div className='infoGame'>
				{ playerOneWin && <WinMessage name={ playerOne } style={ 'win' } /> }
				{ playerTwoWin && <WinMessage name={ playerTwo } style={ 'win' } /> }
				{ equals && <div>Nobody win</div> }
			</div>
		</div>
	)
}

export default TheGame
