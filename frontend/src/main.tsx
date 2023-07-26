import { Suspense }from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Loading from './components/loading.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<Loading/>}>
    <App />
  </Suspense>
)
