import React from 'react'

function Event_Handaling(props) {
    
    function msg(msgg,add){
        alert("Your name is " + msgg + " And your Address is " + add)
    }
  return (
    <>
    <h1>Event Handling</h1>
    <hr /><hr />
    {/* <button onClick={msg}>Click Me</button> */}
    <button onClick={()=>msg(props.gv,props.ad)}>Click Me</button> {/* arrow function*/}
      
    </>
  )
}

export default Event_Handaling
