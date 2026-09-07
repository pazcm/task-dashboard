import { useState } from 'react'
import type { FormEvent } from 'react'

import type { Task, TaskPriority, TaskStatus } from '../../types/task'
import './Modal.css'

interface ModalProps {
  task?: Task
  onClose: () => void
  onSubmit: (task: Omit<Task, 'id'>) => void
}

function Modal({ task, onClose, onSubmit }: ModalProps) {
  const [title, setTitle] = useState(task?.title ?? '')
  const [description, setDescription] = useState(task?.description ?? '')
  const [status, setStatus] = useState<TaskStatus>(task?.status ?? 'todo')
  const [priority, setPriority] = useState<TaskPriority>(task?.priority ?? 'medium')

  const isEditing = Boolean(task)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit({ title, description, status, priority })
    onClose()
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="task-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="new-task-heading"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">Task details</p>
            <h2 id="new-task-heading">{isEditing ? 'Edit task' : 'Create a new task'}</h2>
          </div>
          <button className="modal-close" type="button" aria-label="Close modal" onClick={onClose}>
            x
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              required
              autoFocus
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="What needs to be done?"
            />
          </label>
          <label>
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Add a little context"
              rows={4}
            />
          </label>
          <div className="form-row">
            <label>
              Status
              <select value={status} onChange={(event) => setStatus(event.target.value as TaskStatus)}>
                <option value="todo">To do</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
              </select>
            </label>
            <label>
              Priority
              <select value={priority} onChange={(event) => setPriority(event.target.value as TaskPriority)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>
          <div className="modal-actions">
            <button className="button-secondary" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="button-primary" type="submit">
              {isEditing ? 'Save changes' : 'Create task'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Modal
