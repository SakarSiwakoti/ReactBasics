import React from 'react'
import Button from './Button'


const Home = () => {
  return (
    <div>
      <h1> This is the home page</h1>
    
        <Button name = "Register" title = "click here to register"/>
        <Button name = "Login" title = "click here to login"/>
        <Button name = "Logout" title = "click here to logout"/>
        {/* <Button name = {1} /> //proptype.string is defined in Button component , can't pass integer value */}
    </div>
  )
}

export default Home
