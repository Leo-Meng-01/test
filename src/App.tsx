import React, { useReducer, useState } from 'react';
import './App.css';

interface State  {
  count: number;
};

type Action =
   { type: 'increment' }
  | { type: 'decrement' };

const reducer = (state:State,action:Action) => {
    switch(action.type){
      case 'increment' :
        return {count:state.count+1}
      case 'decrement' :
        return {count:state.count-1}
      default :
        return state
    }
  }
  

function App() {
  const[number,setNumber] = useReducer(reducer,{count:0});
  return (
    <>
    <button onClick={()=>setNumber({type:'increment'})}>
      +1
    </button>
    <button onClick={()=>setNumber({type:'decrement'})}>
      -1
    </button>
    <input type='text' value={number.count}/>
    </>
  );
}

export default App;
