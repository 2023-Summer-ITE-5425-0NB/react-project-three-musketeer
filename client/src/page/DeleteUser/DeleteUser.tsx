import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Login/AuthContext";
import axios from "axios";

const DeleteUser = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:9090/users/delete/${authContext.user?.email}`,
        {
          headers: {
            Authorization: authContext.token,
          },
        }
      );
      // Handle successful deletion
      console.log("User deleted:", response.data);
      // Clear the user data in the context
      authContext.setUser(null);
      authContext.setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h2>Delete User</h2>
        {authContext.isLoggedIn ? (
          <div className="mt-4">
            <p>Are you sure you want to delete your account?</p>
            <button type="button" onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        ) : (
          <div className="not-authorized-message mt-4">Not Authorized</div>
        )}
      </div>
    </div>
  );
};

export default DeleteUser;
