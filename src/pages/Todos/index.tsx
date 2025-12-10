import {Link, useParams} from "react-router-dom";

import useTodos from "../../hooks/useTodos.ts";
import PageLoader from "../../components/loader";
import Error from "../../components/error";
import Todos from "../../components/todos";


const TodosPage = () => {

  const { userId } = useParams();

  const { loading, todos, error } = useTodos(userId);
  
  return (
    <>
      <h1 className={'title'}>Todos</h1>

      <div className={'breadcrumbs'}>
        <Link to={'/'}>Home</Link>
        <span>Todos</span>
      </div>

      { loading && <PageLoader /> }

      { error && <Error error={ error} /> }

      { todos && userId &&
        <Todos userId={ userId } todos={todos} />
      }
    </>
  )
}

export default TodosPage