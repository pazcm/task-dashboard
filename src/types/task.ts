export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'blocked'

export type TaskPriority = 'low' | 'medium' | 'high'

export interface Task {
  id: number
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
}

// export default Task
