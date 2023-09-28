import { useSelector } from 'react-redux'
import List, { type Task } from './List'

interface TaskState {
  tasks: Task[]
}

function ListContainer() {
  const { tasks } = useSelector((state: TaskState) => ({
    tasks: state.tasks,
  }))

  return <List tasks={tasks} />
}
export default ListContainer
