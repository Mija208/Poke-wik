import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Listado from '../pages/Listado'
import DetaPoke from '../pages/DetaPoke'


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='listado' element={<Listado/>}/>
        <Route path='pokemones/:url' element={<DetaPoke/>}/>
      </Routes >
    </div>
  )
}

export default AppRouter
