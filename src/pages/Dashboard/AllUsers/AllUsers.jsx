import { QueryClient, useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`https://summer-camp-server-moktubat.vercel.app/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                icon: 'success',
                title: `${user.name} is Admin Now`,
                showConfirmButton: 'false',
                timer: 1500
            })
        }
    })
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete User",
      text: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`)
          .then(() => {
            QueryClient.invalidateQueries("users");
            Swal.fire({
              icon: "success",
              title: "User Deleted",
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred while deleting the user",
            });
            console.error("Error deleting user:", error);
          });
      }
    });
  };
  return (
    <div className="w-full">
      <div className="flex justify-evenly h-[60px] text-white bg-gradient-to-l from-red-600 to-yellow-600 p-1 mb-4 items-center rounded-lg">
        <h3 className="text-2xl">Total User: {users.length}</h3>
      </div>
      <div className="mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>
                    <label>{index + 1}</label>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    { user.role === 'admin' ? 'admin' :
                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-white">Admin</button>
                    }
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn bg-red-600 text-white hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
