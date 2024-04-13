import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
 const {name,title} = props

  return (

    <div>
    <h2>{title}</h2>
    <button>{name}</button>
    </div>
     
  )
}

// Button.defaultProps = {
//     name: "Default"
// }
Button.propTypes = {
  name: PropTypes.string
}

export default Button
