import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminProducts } from '../pages/AdminProducts'

export const AppRouter = () => {

   const authStatus = 'authenticated'

  return (
    <Routes>

    {authStatus === 'authenticated' ? (
      <>
      <Route path='/' element={<AdminProducts />} />
      </>
    ) : (
      <>
      <Route path='/login' />
      </>
      
      )
    }
      </Routes>
      )
}
