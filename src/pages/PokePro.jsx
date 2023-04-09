import React from 'react'
import { useNavigate } from 'react-router-dom'

const PokePro = ({id, name, url, image}) => {

    const navigate = useNavigate()

const HandleClick = ()=>{
    navigate (`pokemones/${url}`)
}

  return (
    <div>
      <div className="card" style={{width: "16rem"}}>
       <img src={image} className="card-img-top" alt="..."/>
         <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{url}</p>
        <button className='btn btn-success' onClick={HandleClick}>Ver más</button>
        </div>
      </div>
    </div>
  )
}

export default PokePro
