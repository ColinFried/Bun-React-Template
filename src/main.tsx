/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/page.tsx'
import "./_utils/_styles/main.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
