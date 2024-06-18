import React, { useState } from 'react'

function Form() {
    let [Fname,setFname]= useState()
    let getdata=(e)=>{
        // console.log(e.target.value);
        setFname(e.target.value)
    }
    let subb=(e)=>{
        console.log(Fname);
        e.preventDefault();
    }
  return (
    <>
    
    <h1>Form</h1>
    <h2>Welcome {Fname}</h2>
    <form action="" onSubmit={subb}>
    <input type="text" onChange={getdata} name='fname'/>
    <button type="submit"> Send</button>
    </form>
      
    </>
  )
}

export default Form
