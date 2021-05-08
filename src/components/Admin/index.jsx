import React from "react";
import { useQuery } from "react-query";
import axios from "../../utils/axios";

import './style.css'

function Admin() {
  const [error, setError] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const res = await axios.get("/users");
    return res.data;
  };
  const res = useQuery("users", getUsers, {
    onError: (e) => {
      setError(e.response.data.error);
    },
  });

  React.useEffect(() => {
    getUsers();
    res.isSuccess && setUsers(res.data.users);
    // console.log(res.data);
  }, [res]);
  return (
    <div className="container" style={{marginTop: '1.5rem'}}>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {res.isLoading ? (
        <div className="container">Loading ...</div>
      ) : (
        <table className="table table-bordered" >
          <thead >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Names</th>
              <th scope="col">Emails</th>
              <th scope="col">Courses</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="">{index+1}</th>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
