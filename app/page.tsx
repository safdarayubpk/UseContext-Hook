import React from 'react'
import { ContextProvider } from '../context/MyContext'
import ParentComp from './components/ParentComp/ParentComp'

export default function Home() {  
  return (
    <div>
      <ContextProvider>
          <ParentComp />
      </ContextProvider>
    </div>
  )
}
