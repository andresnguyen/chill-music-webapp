import MainLayout from './layout/MainLayout'
import React from 'react'
import { message } from 'antd'

function App() {
  message.config({
    maxCount: 3,
    duration: 1,
  })

  return <MainLayout />
}

export default App
