import type {T_Todo} from "../../types";
import './style.css'


type IProps = {
  todo:T_Todo
}
const Todo = ({todo}: IProps) => {

  return (
    <div className={ `todo-item ${ todo.completed ? 'completed' : '' }` }>
      { todo.title }
      <input type={'checkbox'} checked={ todo.completed } readOnly title={ todo.completed ? 'Completed' : 'Not completed' } />
    </div>
  )
}

export default Todo