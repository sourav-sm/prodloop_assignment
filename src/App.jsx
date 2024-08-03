import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Feedbacks } from './Components/Feedbacks'
import FilterComponent from './Components/FilterComponent'

function App() {

  return (
    <>
      <Header/>
      <Feedbacks/>
      <FilterComponent/>

    </>
  )
}

export default App
