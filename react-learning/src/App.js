import React, { useState } from 'react';
import { getData } from './actions';
import './App.css';
import Users from './Users';

function App() {
  const[state,setState] = useState([]);
  const[change,setChange] = useState(true);

  const changeData = () => {
    change?setChange(false):setChange(true);
  }

  React.useEffect(() => {
    getData(setState);
  }, []);

  return (
    <React.Fragment>
   <button onClick={changeData}>change</button>
   <div className='grid-container'>
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
