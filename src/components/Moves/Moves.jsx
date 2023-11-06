import PropTypes from 'prop-types'

function Moves({ id, getMoveId, children }) {
	return (
		<div data-id={ id } onClick={ getMoveId } className='move'>{ children }</div>
	)
}

Moves.propTypes = {
	id: PropTypes.number.isRequired,
	getMoveId: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired
}


export default Moves
