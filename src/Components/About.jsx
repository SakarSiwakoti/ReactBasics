import { useState } from 'react'
 const About = () =>{

    // const state = useState("Sakar")
    // const firstItem = console.log(state[0])
    // const secondItem = console.log(state[1])  
    //var count = 0
    
    // const state = useState(0)
    // const firstItem = state[0];
    // const secondItem = state[1];

const [number, setNumber ]= useState(0)
    const increaseCount = ()=>{
      setNumber(number + 1)
      
    }
    const decreaseCount = () =>{
        setNumber(number - 1)
    }
  return (
    <div>
    
      <h2>{number}</h2>

      <button onClick = {increaseCount} >+</button>
      <button onClick = {decreaseCount} >-</button>
    </div>
  )
  }

export default About
