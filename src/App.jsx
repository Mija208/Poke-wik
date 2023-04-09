
import './App.css'

import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
/*import { pokepro } from './data/getDataPokemon'*/
import { MiContext } from './context/MiContext';

const urlApi = 'https://pokeapi.co/api/v2/pokemon/'
const App = () => {
  const [dataPoke, setDataPoke] = useState ([]);

const getData = async()=>{
  const res = await fetch(urlApi)
  const data = await res.json()
  setDataPoke(data.results)
  
}

useEffect( ()=>{
  getData()
}, [])

  return (
    <div>
      <MiContext.Provider value={{dataPoke, setDataPoke}}>
      <NavBar/>
      <AppRouter/>
      </MiContext.Provider>
   
    </div>
  );
};

export default App
