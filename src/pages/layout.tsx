import { Outlet } from 'react-router-dom';
import Footer from "../components/footer";
import Header from "../components/header";


const Layout = () => {

  return (
    <div className={'layout-container'}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout