import type {T_ErrorHandler, T_Todo } from "../types";


export const getTodos = async (userId:string, errorHandler?:T_ErrorHandler):Promise<T_Todo[] | null> => {

  try {

    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    if(!todos.ok){
      throw new Error(`HTTP error! Status: ${todos.status}`);
    }
    return todos.json()

  } catch (e) {
    if(errorHandler){
      errorHandler(e)
    }
    return null;
  }

}