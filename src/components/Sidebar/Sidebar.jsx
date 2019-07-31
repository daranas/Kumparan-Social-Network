import React from 'react';
import Users from '../Users/Users';
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <aside>
      {Object.keys(props.detail).length ? (
        <h1>Detail</h1>
      ) : (
        <div className="kumparan-widget">
          <div className="widget-title">
            <h3>Daftar Pengguna</h3>
          </div>
          <Users data={props.users} />
        </div>
      )}
    </aside>
  );
}

export default Sidebar;