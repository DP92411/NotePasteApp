import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import  { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <div className="w-full ">
    <App />
    <Toaster position="top-right"/>
    </div>
  </Provider>
  </StrictMode>,
)
