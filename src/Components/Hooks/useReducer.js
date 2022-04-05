import React,{useReducer, useState} from "react";
import "./style.css";

const reducer =(state ,action)=>{
if( state > 0 && action.type === "minus"){
    return state - 1;
}
if(action.type ==="plus"){
    return state +1
}
else{
    return state
}
}

const UseReducer = () => {
    // const [myNum, setMyNum] = useState(0)
    const intialdata = 0
    const [state, dispatch] = useReducer(reducer, intialdata)
   

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={()=>{dispatch({type:"minus"})}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Minus
        </div>
        <div
          className="button2" onClick={()=>{dispatch({type:"plus"})}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Plus
        </div>
      </div>
    </>
  );
};

export default UseReducer;