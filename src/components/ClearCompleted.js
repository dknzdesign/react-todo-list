import React from 'react'
import PropTypes from 'prop-types'

ClearCompleted.propTypes = {
    clearCompleted: PropTypes.func.isRequired
}

function ClearCompleted(props) {
    return (
        <button className="button" onClick={props.clearCompleted}>Clear completed</button>
    );
}

export default ClearCompleted