import React from 'react'
import Peoples from './Components/Peoples'
import { people } from './data'
import Books from './Components/Books'
import Gallery from './Components/Gallery'
import Products from './Components/Product'
import Students from './Components/Students'

function App() {
  // return <Peoples data={people} />
  return (
    <>
      {people.map((e) => {
        console.log(e)
        return <Peoples id={e.id} name={e.name} age={e.age} email={e.email} />
      })}

    
      <Books/>
      <Gallery/>
      <Products/>
    <Students/>
    </>
  )
}

export default App
