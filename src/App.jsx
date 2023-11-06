// Pages
import BeforeStart from './pages/BeforeStart/BeforeStart'
import TheGame from './pages/TheGame/TheGame'
// Global state
import { useGlobalContext } from './GlobalContext'

function App() {
	const { playerOne, playerTwo } = useGlobalContext()

	if (!playerOne || !playerTwo) {
		return (
			<BeforeStart />
		)
	}
	return (
		<TheGame />
	)
}

export default App
