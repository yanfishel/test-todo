import {useEffect, useState} from "react";

import {useStore} from "../../store";
import {getUser} from "../../api/users.ts";
import useErrorHandler from "../../hooks/useErrorHandler.ts";
import {AtIcon, EmailIcon, UserIcon} from "../../assets/icons.tsx";
import PageLoader from "../loader";
import ErrorMessage from "../error-message";
import './style.css'


type IProps = {
  userId?:string
}
const TodosUserCard = ({ userId }: IProps) => {

  const [loading, setLoading] = useState(false)

  const {error, errorHandler} = useErrorHandler()

  const selectedUser = useStore(({ selectedUser }) => selectedUser)
  const selectUser = useStore(({ selectUser }) => selectUser)

  const getApiUsers = async () => {
    if((!selectedUser && userId) || (userId && selectedUser?.id+'' !== userId)) {
      setLoading(true)
      const user = await getUser(userId, errorHandler)
      selectUser( user )
      setLoading(false)
    }
  }

  useEffect(()=>{
    getApiUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(error) {
    return <div style={{flex: 1}}> <ErrorMessage error={ error } /></div>
  }

  return (
    <div className={`todos-user-card`} >

      { loading && <PageLoader /> }

      { selectedUser &&
        <>
          <div className={'name'}>
            <UserIcon />
            { selectedUser.name }
          </div>

          <div className={'username'}>
            <AtIcon />
            { selectedUser.username }
          </div>

          <div className={'email'}>
            <EmailIcon />
            <a href={`mailto:${selectedUser.email}`}>{ selectedUser.email }</a>
          </div>
        </>
      }

    </div>
  )
}

export default TodosUserCard