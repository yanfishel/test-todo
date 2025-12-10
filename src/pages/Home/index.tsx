import {useEffect} from "react";

import {useStore} from "../../store";
import useUsers from "../../hooks/useUsers.ts";
import PageLoader from "../../components/loader";
import ErrorMessage from "../../components/error";
import UserCard from "../../components/user-card";
import './style.css'



const Home = () => {

  const { loading, users, error } = useUsers();  


  const selectUser = useStore(({ selectUser }) => selectUser)

  const documentClickHandler = (e:PointerEvent) => {
    const items = document.querySelectorAll('.user-card')
    const target = e.target as HTMLElement
    let contains = false;
    items.forEach(item => {
      if (item.contains(target)) {
        contains = true
      }
    })
    if(!contains){
      selectUser(null)
    }
  }

  useEffect(() => {
    document.addEventListener('click', documentClickHandler)

    return () => {
      document.removeEventListener('click', documentClickHandler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <h1 className={'title'}>Users</h1>

      <div className={'breadcrumbs'}>Home</div>

      { loading && <PageLoader /> }

      { error && <ErrorMessage error={ error} /> }

      { users &&
        <div className={'grid-container'}>
          { users.map(user => <UserCard key={ user.id } user={ user} />) }
        </div>
      }

    </>
  )
}

export default Home