import React from 'react'
import { useNavigate } from 'react-router-dom'

const PokePro = ({poke}) => {

    const navigate = useNavigate()

const HandleClick = ()=>{
    navigate (`pokemones/${poke.name}`)
}

  return (
    <div>
      <div className="card" style={{width: "16rem"}}>
       <img src={poke.sprites.other.dream_world.front_default} alt=""/>
         <div className="card-body">
        <h5 className="card-title">{poke.name}</h5>
        <p className="card-text">{url}</p>
        <button className='btn btn-success' onClick={HandleClick}>Ver más</button>
        </div>
      </div>
    </div>
  )
}

export default PokePro
