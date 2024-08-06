import React from 'react'
import { useEffect, useState} from 'react'

const App = () => {
  const [vEntries, setVEntries] = useState(null)

  useEffect(() => {
    const fetchPosts = async () =>{
      const response = await fetch('/api/all')
      const posts = await response.json()
      
      if (response.ok) {
        console.log(posts)
      } else {
        console.log("nope")
      }
    }
    fetchPosts();
  },[])

  return (
  <>
    <h1>Look at the console 👀</h1>
    {}
  </>
  )
}

export default App