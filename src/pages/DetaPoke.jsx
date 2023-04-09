import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MiContext } from '../context/MiContext';
/*import { pokepro } from '../data/getDataPokemon';*/

const DetaPoke = () => {

    const {dataPoke} = useContext(MiContext)

    const {url} = useParams();
    const pokemonesDetaPoke = dataPoke.find(item => item.url == url)
    
    
    

  return (
    <div>
      <h2>{pokemonesDetaPoke.name}</h2>
      <h2>{pokemonesDetaPoke.url}</h2>
    </div>
  );
};

export default DetaPoke
