import React, {useState, useEffect} from 'react'
import './App.css'

const Boswell ={
  company: null,
  followers: null
}
function App(){
  const [page, setPage] = useState(Boswell);

  async function getPage(){
   const response = await fetch('https://api.github.com/users/doujones');
   const json = await response.json()

   setPage({
     company: json.company,
     followers: json.followers
   })
  }

  useEffect(() => {
    getPage()
  }, [])
  return(
    <div className="App">
    <header className="App-header">
    <h2 className="text-center">Fetch Data</h2>
    <h3>{`company: ${page.company}, followers: ${page.followers}`}</h3>
    </header>
    </div>
  )
}

export default App