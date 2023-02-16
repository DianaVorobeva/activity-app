import './App.css';
import StartBlock from './StartBlock';
import IdeaBlock from './IdeaBlock';
import { useState, useEffect } from 'react';

function App() {
  const [changeBlock, setChangeBlock] = useState(true);
  const [idea, setIdea] = useState("");
  const [newIdea, setNewIdea] = useState(false);

  const changeState = () => {
    setChangeBlock(false);
    setNewIdea(idea)
  }

  useEffect(() => { 
   async function getIdea() {
  const response = await fetch (`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  setIdea(data.activity);
};
getIdea();
  },[newIdea]) 

  
  const btn = changeBlock ? "Get an idea" : "Get new idea";
  return (
    
    <div>
  
      {changeBlock ? <StartBlock/> : <IdeaBlock activity={idea}/>}
      <div className="btnContIdea">
      <button onClick={changeState}>{btn}</button>    
      </div>
    </div>
  );
}

export default App;
