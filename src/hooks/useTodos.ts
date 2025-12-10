import {useEffect, useState} from "react";

import type {T_Todo} from "../types";
import {getTodos} from "../api/todos.ts";
import useErrorHandler from "./useErrorHandler.ts";


const UseUsers = (userId?:string) => {

  const [todos, setTodos] = useState<T_Todo[]|null>(null)
  const [loading, setLoading] = useState(false)

  const {error, errorHandler} = useErrorHandler()

  const getApiTodos = async (userId:string) => {
    setLoading(true)
    const todos = await getTodos(userId, errorHandler)
    setTodos(todos)
    setLoading(false)
  }


  useEffect(()=>{
    if(userId) {
      getApiTodos(userId)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return {
    loading,
    todos,
    error
  }
}

export default UseUsers