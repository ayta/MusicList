import React from 'react';
import Sidebar from '../shared/Sidebar';

export default function LogoutPage(props) {
  const { match } = props;
  return (
    <div className="row">
      <div className="col-sm-12 col-md-8">
        This is the Logout page. The user name is: {match.params.name}
      </div>
      <Sidebar />
    </div>
  );
}
