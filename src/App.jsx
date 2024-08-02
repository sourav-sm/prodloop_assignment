import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
// import {FilterComponent} from './Components/x'
import FilterComponent from './FilterComponent'

function App() {

  return (
    <>
      <Header/>
      <h1 className='text-black font-semibold text-2xl shadow-lg ml-3'>Feedbacks</h1>
      <FilterComponent/>

    </>
  )
}

export default App
