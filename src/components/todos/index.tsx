
import type {T_Todo} from "../../types";
import Todo from "../todo";
import './style.css'


type IProps = {
  todos:T_Todo[]
}
const Todos = ({todos}: IProps) => {

  return (
    <div className={'todo-container'}>
      { todos.map(todo =>
        <Todo key={todo.id} todo={todo} />
      ) }
      { !todos.length && (
        <div>No todos yet!</div>
      )}
    </div>
  )
}

export default Todos