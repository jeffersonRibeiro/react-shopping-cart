import React from "react";

export default function Counter(){
const[counterVal,setCounterVal]=React.useState(1)

function increaseCounter(){
    let val=counterVal+1
    setCounterVal(val)
}

function decreaseCounter(){
    let val=counterVal-1
    setCounterVal(val)
}
    return(
     <div className="container">
        <div className="box" onClick={decreaseCounter}>-</div>
        <div className="box1">{counterVal}</div>
        <div className="box2" onClick={increaseCounter}>+</div>
     </div>
    )
}
