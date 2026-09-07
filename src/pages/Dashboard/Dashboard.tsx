import { useState } from 'react'

import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import type { Task } from '../../types/task'
import './Dashboard.css'

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  function handleSubmit(task: Omit<Task, 'id'>) {
    setTasks((currentTasks) => {
      if (selectedTask) {
        return currentTasks.map((currentTask) =>
          currentTask.id === selectedTask.id
            ? { ...currentTask, ...task }
            : currentTask,
        )
      }

      return [...currentTasks, { id: Date.now(), ...task }]
    })
  }

  function closeModal() {
    setIsModalOpen(false)
    setSelectedTask(null)
  }

  function openCreateModal() {
    setSelectedTask(null)
    setIsModalOpen(true)
  }

  function openEditModal(task: Task) {
    setSelectedTask(task)
    setIsModalOpen(true)
  }

  function handleDelete(task: Task) {
    if (!window.confirm(`Do you want to delete "${task.title}"?`)) {
      return
    }

    setTasks((currentTasks) =>
      currentTasks.filter((currentTask) => currentTask.id !== task.id),
    )
  }

  return (
    <section className="dashboard" aria-labelledby="tasks-heading">
      <div className="dashboard-toolbar">
        <h2 id="tasks-heading">Filtrar tareas (TBD)</h2>
        <Button onClick={openCreateModal} />
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
              <div className="task-item-actions">
                <span className={`task-priority task-priority-${task.priority}`}>
                  {task.priority}
                </span>
                <button className="task-edit-button" type="button" onClick={() => openEditModal(task)}>
                  Edit
                </button>
                <button className="task-delete-button" type="button" onClick={() => handleDelete(task)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isModalOpen && (
        <Modal
          task={selectedTask ?? undefined}
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </section>
  )
}

  export default Dashboard

  