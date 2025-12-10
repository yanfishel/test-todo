import {getUsers} from "../api/users.ts";
import useErrorHandler from "./useErrorHandler.ts";
import {useEffect, useState} from "react";
import type {T_User} from "../types";



const UseUsers = () => {

  const [users, setUsers] = useState<T_User[]|null>(null)
  const [loading, setLoading] = useState(false)

  const {error, errorHandler} = useErrorHandler()

  const getApiUsers = async () => {
    setLoading(true)
    const users = await getUsers(errorHandler)
    setUsers(users)
    setLoading(false)
  }


  useEffect(()=>{
    getApiUsers()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    loading,
    users,
    error
  }
}

export default UseUsers