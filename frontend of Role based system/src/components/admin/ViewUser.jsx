import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../services/UserService";



function ViewUser() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers().then((response) => {
        setUsers(response.data);
        setError("");
      }).catch(() => setError("Failed to fetch users"));
  };

  const handleDelete = (id) => {
   
    deleteUser(id).then(() => {
        setSuccess("User deleted successfully");
        setError("");
        fetchUsers(); 
      })
      .catch(() => setError("Failed to delete user"));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Users List</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)} > Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUser;
