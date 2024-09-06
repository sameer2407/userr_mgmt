import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../contextAPI/MyContext";

const UserDetaile = () => {
  const { userData } = useContext(MyContext);
  const { userid } = useParams();

  const user = userData.find((user) => user.id === parseInt(userid));

  if (!user) {
    return <p className="text-center">User not found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
          {user.name}
        </h1>

        <div className="text-lg space-y-3">
          <p>
            <span className="font-semibold text-gray-600">Username: </span>
            {user.username}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Email: </span>
            <a
              href={`mailto:${user.email}`}
              className="text-blue-500 underline"
            >
              {user.email}
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-600">Phone: </span>
            {user.phone}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Website: </span>
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {user.website}
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-600">Company: </span>
            {user.company.name}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Address: </span>
            {user.address.street}, {user.address.suite}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetaile;
