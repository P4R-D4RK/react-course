import PropTypes from 'prop-types'

export function Button({text, name = 'User'}) {
    
    return <button onClick={function() { 
        console.log('Hola Mundo')
     }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
