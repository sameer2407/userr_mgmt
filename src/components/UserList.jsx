import React, { useEffect, useState, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react"; // Import Spinner
import { MyContext } from "../contextAPI/MyContext";
import Edit from "./Edit";
import Add from "./Add";

const UserList = () => {
  const { userData, setUserData } = useContext(MyContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setOpenEditDialog(true);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchUsers();
  }, [setUserData]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    // Display spinner while loading
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" aria-label="Loading user data" />
      </div>
    );
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUserData((prevData) => prevData.filter((user) => user.id !== id));
      window.alert("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8 px-4">
        <h1 className="text-3xl font-bold text-blue-600">User List</h1>
        <button
          onClick={() => setOpenAddDialog(true)}
          className="flex items-center bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add
          <span className="ml-2">
            <HiUserAdd size={20} />
          </span>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {userData.map((user) => (
          <div
            key={user.id}
            className="flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                {user.name}
              </h2>
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {user.website}
              </a>
            </div>
            <div className="flex justify-center md:justify-start mt-4 space-x-4 text-xl">
              <button
                onClick={() => handleEditClick(user)}
                className="text-yellow-500 hover:text-yellow-600 transition"
              >
                <FaUserEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-600 transition"
                onClick={() => handleDelete(user.id)}
              >
                <MdDelete />
              </button>
              <Link to={`/users/${user.id}`}>
                <button className="text-blue-500 hover:text-blue-600 transition">
                  <IoIosInformationCircleOutline />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Add and Edit Dialogs */}
      <Add
        title="Add User"
        openAddDialog={openAddDialog}
        setOpenAddDialog={setOpenAddDialog}
      />
      <Edit
        openEditDialog={openEditDialog}
        setOpenEditDialog={setOpenEditDialog}
        selectedUser={selectedUser}
      />
    </div>
  );
};

export default UserList;
