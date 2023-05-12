import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard/CoffeeCard'

function App() {
  const coffees = useLoaderData();
  console.log(coffees);
  

  return (
    <>
      <h1>total Coffee: {coffees.length}</h1>
      <div className='md:grid grid-cols-2 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
