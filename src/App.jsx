import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard/CoffeeCard'

function App() {
  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedCoffees)

  return (
    <>
      <p>Total Coffee: {coffees.length}</p>
      <div className='md:grid grid-cols-2 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
