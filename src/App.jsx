import React from 'react'
import Header from './component/Header'
import Cards from './component/Cards'
import data from './data'

function App() {
  return (
    <div>
      <Header/>
      <Cards data={data} />
</div>
  )
}

export default App