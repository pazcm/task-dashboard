import { useState } from 'react'

import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import type { Task } from '../../types/task'
import './Dashboard.css'

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleSubmit(task: Omit<Task, 'id'>) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), ...task },
    ])
  }

  return (
    <section className="dashboard" aria-labelledby="tasks-heading">
      <div className="dashboard-toolbar">
        <h2 id="tasks-heading">Filtrar tareas (TBD)</h2>
        <Button onClick={() => setIsModalOpen(true)} />
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">Aún no hay tareas. Crea una para empezar ...</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li className="task-item" key={task.id}>
              <div>
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
              </div>
              <span className={`task-priority task-priority-${task.priority}`}>
                {task.priority}
              </span>
            </li>
          ))}
        </ul>
      )}

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </section>
  )
}

  export default Dashboard

