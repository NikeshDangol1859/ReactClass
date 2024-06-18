import React, { useEffect } from 'react';

function UseState() {
    const [count, setCount] = React.useState(5);
    const [testcount, settestCount] = React.useState(10);


    let increment = ()=>{setCount(count+1)}
    let decrement = ()=>{setCount(count-1)}

    useEffect(()=>{
      console.log("Show Me" + count);
      console.log("test Me" + testcount);

    },[testcount])
    

  return (
    <>
    <h1>Example of UseState</h1>
    <hr /><hr />

    <button onClick={()=>increment()}>+</button> {count} <button onClick={()=>decrement()}>-</button>

    <br />
    <br />

    <button onClick={()=>settestCount(testcount+5)}>+</button> {testcount} <button onClick={()=>settestCount(testcount-5)}>-</button>


      
    </>
  )
}

export default UseState
