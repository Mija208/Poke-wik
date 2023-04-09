import React, { useContext } from 'react'
import { MiContext } from '../context/MiContext'
import PokePro from './PokePro'

const HomePage = () => {
const {dataPoke, setDataPoke} = useContext(MiContext)

  return (
    
     <div className='container mt-'>
        <div className='row d-flex justify-content-between gap-5'>
         {dataPoke.map(poke=> <PokePro key={poke.url} {...poke}/>)}
        </div>
    </div>
    
    
    
        
  )
}

export default HomePage
