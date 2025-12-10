import {useNavigate} from "react-router-dom";

import type {T_User} from "../../types";
import {useStore} from "../../store";
import {AtIcon, EmailIcon, UserIcon} from "../../assets/icons.tsx";
import './style.css'



type IProps = {
  user:T_User
}
const UserCard = ({ user }: IProps) => {

  const navigate = useNavigate()
  const selectedUser = useStore(({ selectedUser }) => selectedUser)
  const selectUser = useStore(({ selectUser }) => selectUser)
  const toggleCompleted = useStore(({ toggleCompleted }) => toggleCompleted)

  const showTodos = () => {
    selectUser(user)
    toggleCompleted(false)
    navigate(`/todos/${ user.id }`)
  }

  return (
    <div className={`user-card ${ selectedUser?.id === user.id ? 'selected' : '' }`}
         onClick={ ()=>selectUser(user) }>

      <div className={'name'}>
        <UserIcon />
        { user.name }
      </div>

      <div className={'username'}>
        <AtIcon />
        { user.username }
      </div>

      <div className={'email'}>
        <EmailIcon />
        <a href={`mailto:${user.email}`}>{ user.email }</a>
      </div>
      <div className={'actions'}>
        <button onClick={ showTodos }>Show TODOs</button>
      </div>
    </div>
  )
}

export default UserCard