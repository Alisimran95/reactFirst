import React, { useState } from 'react';
import { getData } from './actions';
import './App.css';
import Card from './Card';
import Card2 from './Card2';
import Users from './Users';

function App() {
  const[state,setState] = useState([]);
  const[change,setChange] = useState(true);
  const [changeCard,setChangeCard] = useState(true);

  const changeData = () => {
    change?setChange(false):setChange(true);
  }
  const changeCardFunction =()=>{
    changeCard?setChangeCard(false):setChangeCard(true);
  } 

  React.useEffect(() => {
    getData(setState);
  }, []);

  return (
    <React.Fragment>
    <div className='card-container'>
    <button className='change-card-btn' onClick={changeCardFunction}>change card</button>
    {changeCard?<Card/>:<Card2/>}
    </div>
   <div className='grid-container'>
   <button className='change-data-btn' onClick={changeData}>change</button>
   <div className='grid-box'>
        {state?.map(({ id, title ,resetAll}) => (
          change?<Users
            title={title}
            key={id}
            state={state}
          />:<div key={id}></div>
        ))}
      </div>
   </div>
    </React.Fragment>
  );
}

export default App;
