import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <>
      <Header />

      <div className="layout-container">
        <Sidebar />
        <main className="main-content">
          <p>{new Date().toLocaleDateString('es-ES', { 
            weekday: 'long',
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
            }).replace('.', '')}</p>
          <h1>Qué tareas tenemos para hoy?</h1>
          <Dashboard />
        </main>
      </div>
    </>
  )
}

export default App
