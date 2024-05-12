
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import LogoFCC from './images/FreeCodeCamp_logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandle = () => {
    setNumClicks(numClicks+1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <header>
        <img src={LogoFCC} alt='Logo FreeCodeCamp' title='Logo FreeCodeCamp' />
      </header>

      <div className='content-main'>

        <Counter clicks={numClicks} />

        <div className='content-button'>
          <Button 
            texto='Click'
            tipoBoton={true}
            clickhandle={clickHandle}
          />
          <Button 
            texto='Reiniciar'
            tipoBoton={false}
            clickhandle={resetCounter}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
