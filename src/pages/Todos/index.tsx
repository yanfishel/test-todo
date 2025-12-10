import {Link, useParams} from "react-router-dom";

import useTodos from "../../hooks/useTodos.ts";
import PageLoader from "../../components/loader";
import Error from "../../components/error";
import Todos from "../../components/todos";


const TodosPage = () => {

  const { userId } = useParams();

  const { loading, todos, error } = useTodos(userId);
  
  console.log(todos);
  
  return (
    <>
      <div className={'breadcrumbs'}>
        <Link to={'/'}>Home</Link>
        <span>Todos</span>
      </div>

      <h1 className={'title'}>Todos</h1>

      { loading && <PageLoader /> }

      { error && <Error error={ error} /> }

      { todos &&
        <Todos todos={todos} />
      }
    </>
  )
}

export default TodosPage