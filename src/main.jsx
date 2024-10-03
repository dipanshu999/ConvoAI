import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './utils/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>,
  </BrowserRouter>
)
