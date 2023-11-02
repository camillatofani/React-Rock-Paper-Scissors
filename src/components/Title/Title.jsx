import PropTypes from 'prop-types'

function Title({ title, tag }) {
	var Tag = tag
	return (
			<Tag>{ title }</Tag>
	)
}

Title.propTypes = {
	title: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
}

export default Title
