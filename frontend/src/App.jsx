import React from 'react'
import { useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Vehicles from './utils/Vehicles'

const App = () => {
  const [vEntries, setVEntries] = useState(null)

  useEffect(() => {
    const loadVehicles = async () =>{
      try {
        const vehicles = await Vehicles.get25cars()
        setVEntries(vehicles)
      } catch (error) {
        console.error('Error: ')
        
      }
    }
    loadVehicles();
  },[])

  return (
  <>
  <Navbar />
    <ul>
    { vEntries && vEntries.map((vehicle) =>(
      <li key={vehicle._id}>
        {vehicle.Year},{vehicle.Make},{vehicle.Model},{vehicle.Trim},{vehicle.Engine},{vehicle.Transmission}
        <hr />
      </li>
      
    ))}
    </ul>
  </>
  )
}

export default App