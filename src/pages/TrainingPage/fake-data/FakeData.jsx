import React, { useMemo, useState,useDeferredValue } from 'react'
import data1 from './generated.json'
import data2 from './data.js'

const FakeData = () => {
   const [data,setData] = useState(data2)
   const [value,setValue] = useState('')
   const deferedValue = useDeferredValue(value)

   const filterPost = useMemo(()=>{
      return data.filter(item => item.name.toLowerCase().includes(deferedValue))
   },[deferedValue])
   console.log(filterPost);

  return (
    <>
    <input type="text"  value={value} onChange={(e)=> setValue(e.target.value)}/>
    <div>
       {filterPost.map(post => (
          <div key={post._id}>{post.name}</div>
       ))}
    </div>
    </>
  )
}

export default FakeData