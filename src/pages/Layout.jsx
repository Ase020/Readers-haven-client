/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';

import { Navbar, Footer } from '../components';

const Layout = ({ user, onLogout, isLoggedin }) => {
  return (
    <div className="app">
      <Navbar user={user} onLogout={onLogout} isLoggedin={isLoggedin} />

      <div className="bg">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
