import React, { useState } from 'react'

function Users({id,title,state}) {
  const[count,setCount]= useState(0);
  const Decrease =()=>{
    setCount(count-1);
  }
  const Increase =()=>{
    setCount(count+1);
  }
  const Reset = ()=>{
    setCount(0);
  }

  return (
    <>
    <div className='card' key={id}>
    <h1>Title: <span id='span' >{title}</span> </h1>
    <div className='progress'>
    <button onClick={Decrease} className='btn btn-decrease'>decrease</button>
    <span>{count}</span>
    <button onClick={Increase} className='btn btn-increase'>increase</button>
    </div>
    <div className='progress'>
    <button onClick={Reset} className='btn btn-reset'>reset</button>
    </div>
  
     </div>
    </>
    )
}

export default Users