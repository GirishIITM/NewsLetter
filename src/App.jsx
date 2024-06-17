import './App.css'
import NavBar from './components/NavBar'
import AllRoutes from './pages/AllRoutes'

function App() {

  return (
    <div className='App'>
      <NavBar />
      {<AllRoutes />}
    </div>
  )
}

export default App
