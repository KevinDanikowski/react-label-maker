import React from 'react'
import PropTypes from 'prop-types';

export default function Header({title}) {
    return (
        <div className='header'>
            <h1>{title}</h1>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}