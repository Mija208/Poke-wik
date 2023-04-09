
import './App.css'

import React, { useState } from 'react'
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
import { pokepro } from './data/getDataPokemon'
import { MiContext } from './context/MiContext'

const App = () => {
  const [dataPoke, setdataPoke] = useState (pokepro)
  return (
    <div>
      <MiContext.Provider value={{dataPoke, setdataPoke}}>
      <NavBar/>
      <AppRouter/>
      </MiContext.Provider>
   
    </div>
  );
};

export default App
