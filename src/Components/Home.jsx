import React from 'react'
import Button from './Button'

function Home (){
  return (
    <div>
        
        <Button name ="login" title ="Click here to Login"/>
        <Button name ="Register" title ="Click here to register"/>
        <Button name ="Logout" title ="Click here to Logout"/>
        {/* <Button name ={1}/> */}

    </div>
  )
}

export default Home
