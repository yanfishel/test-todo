import useUsers from "../../hooks/useUsers.ts";
import PageLoader from "../../components/loader";
import Error from "../../components/error";
import UserCard from "../../components/user-card";
import './style.css'



const Home = () => {

  const { loading, users, error } = useUsers();  

  console.log(users);
  
  return (
    <>
      <div className={'breadcrumbs'}>Home</div>

      <h1 className={'title'}>Users</h1>

      { loading && <PageLoader /> }

      { error && <Error error={ error} /> }

      { users &&
        <div className={'grid-container'}>
          { users.map(user => <UserCard key={ user.id } user={ user} />) }
        </div>
      }

    </>
  )
}

export default Home