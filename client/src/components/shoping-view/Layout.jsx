import React from 'react'
import { Outlet } from 'react-router-dom'

const ShoppingLayout = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        {/* comman header */}
        <h1>Shoping View</h1>
        <main className='flex flex-col w-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout