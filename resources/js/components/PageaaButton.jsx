import React from 'react'
import { Link } from "react-router-dom";



function PageaaButton() {
  
  return (
    <div>
    <button className='bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2'><Link to ="/top">Top</Link></button> 
    <button className='bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2'><Link to = "/calendar">カレンダー</Link></button> 
   
    </div>
  )
}

export default PageaaButton