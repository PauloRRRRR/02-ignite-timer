import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Button } from './components/Button.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Button variant='primary' />
    <Button variant='secondary' />
    <Button variant='danger' />
    <Button variant='success' />
    <Button/>
  </React.StrictMode>,
)
