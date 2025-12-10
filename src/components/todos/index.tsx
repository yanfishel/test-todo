import type {T_Todo} from "../../types";
import {useStore} from "../../store";
import TodosFilter from "../filter";
import TodosUserCard from "../todos-user-card";
import Todo from "../todo";
import './style.css'


type IProps = {
  userId:string
  todos:T_Todo[]
}
const Todos = ({userId, todos}: IProps) => {

  const hideCompleted = useStore(({ hideCompleted }) => hideCompleted)


  return (
    <>
      <div className={'filter-usercard-container'}>
        <TodosFilter />

        <TodosUserCard userId={ userId } />
      </div>

      <div className={'todo-container'}>
        { (hideCompleted ? todos.filter(todo=>!todo.completed) : todos).map(todo =>
          <Todo key={todo.id} todo={todo} />
        ) }
        { !todos.length && (
          <div>No todos yet!</div>
        )}
      </div>
    </>
  )
}

export default Todos