import React from 'react'

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

export default Button
