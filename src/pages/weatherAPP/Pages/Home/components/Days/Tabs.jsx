import React from 'react'

const Tabs = () => {
   const tabs = [
      {value:'weekly forecast'},
      {value:'monthly forecast'},
      {value:'10 day forecast'},
   ]
  return (
    <div className='buttons'>

   {tabs.map(tab => <button key={tab.value} className='btn'>{tab.value}</button>)}
      {/* <button className='btn active '>weekly forecast</button>
      <button className='btn'>monthly forecast</button>
      <button className='btn'>10 day forecast</button> */}
    </div>
  )
}

export default Tabs