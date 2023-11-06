import PropTypes from 'prop-types'

function InfoPlayer({player, name, point}) {
	return (
		<div>
			<div className='player'>{ player }</div>
			<div className='playerName'>{ name }</div>
			<div className='point'>{ point }</div>
		</div>
	)
}

InfoPlayer.propTypes = {
	player: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	point: PropTypes.number.isRequired
}

export default InfoPlayer
