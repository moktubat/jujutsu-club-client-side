import Swal from "sweetalert2";
import useSelected from "../../../hook/useSelected";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [select, refetch] = useSelected();
  const total = select.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selected/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-evenly h-[60px] text-white bg-gradient-to-l from-red-600 to-yellow-600 p-1 mb-4 items-center rounded-lg">
        <h3 className="text-2xl">Total Items: {select.length}</h3>
        <h3 className="text-2xl">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
        <button className="btn btn-warning btn-sm">Pay Now</button>
        </Link>
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
                <th>Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {select.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    <label>{index + 1}</label>
                  </td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar" />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">$ {item.price}</td>
                  <td>
                    <button 
                      onClick={() => handleDelete(item)}
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

export default MyClass;
