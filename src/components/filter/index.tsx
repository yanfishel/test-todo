import {useStore} from "../../store";
import './style.css'

const TodosFilter = () => {

  const hideCompleted = useStore(({ hideCompleted }) => hideCompleted)
  const toggleCompleted = useStore(({ toggleCompleted }) => toggleCompleted)


  return (
    <div className={'filter-container'}>
      <input id={'hide-completed-checkbox'}
             type={'checkbox'}
             checked={ hideCompleted }
             onChange={(e) => toggleCompleted(e.target.checked)} />
      <label htmlFor={'hide-completed-checkbox'}>Hide completed</label>
    </div>
  )
}

export default TodosFilter