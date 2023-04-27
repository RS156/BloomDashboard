import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import './index.css'
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import {api} from '@/state/api'
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer:{
    [api.reducerPath]: api.reducer
  },
  middleware: (defaultMiddleware)=>
    defaultMiddleware().concat(api.middleware)
  
})

setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
