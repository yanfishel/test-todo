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

export const getUser = async (userId:string, errorHandler?:T_ErrorHandler) => {
  try {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!user.ok){
      throw new Error(`HTTP error! Status: ${user.status}`);
    }
    return user.json()
  } catch (e) {
     if(errorHandler){
      errorHandler(e)
    }
    return null;
  }
}