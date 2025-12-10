import type {T_User} from "../../types";
import './style.css'
import {Link} from "react-router-dom";

type IProps = {
  user:T_User
}
const UserCard = ({ user }: IProps) => {

  return (
    <div className={'user-card'}>
      <div>{ user.name }</div>
      <div>{ user.username }</div>
      <div>{ user.email }</div>
      <Link to={`/todo/${ user.id }`}>Show TODOs</Link>
    </div>
  )
}

export default UserCard