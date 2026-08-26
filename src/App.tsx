import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Header />

      <div className="layout-container">
        <Sidebar />
        <main className="main-content">
          <h1>Hello Tasks</h1>
          <p>
            Some tasks will be displayed here...
          </p>
        </main>
      </div>
    </>
  )
}

export default App
