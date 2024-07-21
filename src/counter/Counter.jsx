import React, { useState } from 'react'

const Counter = () => {
    // const [user , setUser]=useState({
    //   name:  "Enter Your Name" ,
    //   rollno : "Roll no"
    // })
    // const changeName = ()=>{
    //  setUser ({
    //       name:  "Hritik Pandy" ,
    //         rollno : "4650"
    //  })

    // }


    const [value , setValue ]=useState(0);

    const changeValue =()=>{
        setValue(
            value+1
        )
    }


    return (

      
        
        <>
        <h2>Counter App  </h2>
        <h2>{value}</h2>
        <button onClick={changeValue}>Increase </button>
        <button onClick={changeValue}>Decrease </button>


     </>
   )
 }

export default Counter