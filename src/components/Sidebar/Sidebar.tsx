import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav aria-label="Main navigation">
        <ul className="sidebar-nav-menu">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
