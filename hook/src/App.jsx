import './App.css';
import { createContext, useEffect, useState } from 'react';
import ChildComp from './component/ChildComp';

 export const theme= createContext();

function App() {
  const [state, setState] = useState(true);

  const handleInput = () => {
    setState((state)=> !state);
  }

  

  return (
    <div>
      < theme.Provider value={state} >
      <button onClick={handleInput}>Button</button>
      {console.log(state)}
       <ChildComp />
      </theme.Provider>
    </div>
  );
}

export default App;
