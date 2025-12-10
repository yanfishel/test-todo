import type {T_ErrorHandler, T_User} from "../types";


export const getUsers = async (errorHandler?:T_ErrorHandler):Promise<T_User[] | null> => {

  try {

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!users.ok){
      throw new Error(`HTTP error! Status: ${users.status}`);
    }
    return users.json()

  } catch (e) {
    if(errorHandler){
      errorHandler(e)
    }
    return null;
  }

}