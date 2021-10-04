import React, {useState, useEffect} from 'react';
import LoadingScreen from './LoadingScreen';
import Home from '../pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    <div>
      {isLoading==true?
        <LoadingScreen/>:
        <Home/>
      }
    </div>
  );
}

export default App;
