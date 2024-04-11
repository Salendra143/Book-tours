import React from 'react'
import Header from './component/Header'
import Cards from './component/Cards'
import data from "./data";
const App = () => {
  return (
<>
    <div>
      <Header/>
      <Cards userinfo={data}/>
  </div>

</>
  )
}

export default App