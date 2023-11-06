import PropTypes from 'prop-types'

function WinMessage({ name, style }) {
	return (
		<div className={ style }>{ name } you made one point!</div>
	)
}

WinMessage.propTypes = {
	name: PropTypes.string.isRequired,
	style: PropTypes.string
}

export default WinMessage
