import React, { useContext } from 'react'
import { MiContext } from '../context/MiContext'
import PokePro from './PokePro'

const HomePage = () => {
const {dataPoke, setdataPoke} = useContext(MiContext)

  return (
    <div>
      
   
    <div className='container mt-4'>
        <div className='row d-flex justify-content-between gap-5'>
{dataPoke.map(poke=> <PokePro key={poke.id} {...poke}/>)}
        </div>
    </div>
    
    
    
    </div>    
  )
}

export default HomePage
