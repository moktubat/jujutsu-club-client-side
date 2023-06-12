import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllClasses = () => {
    const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((result) => {
        setClasses(result);
      });
  }, []);
    return (
        <div>
      <h1 className="text-5xl font-bold py-8 text-center">Popular Classes!</h1>

      <div className="flex flex-wrap -m-4 justify-center">
        {classes.map((clss) => (
          <div key={clss._id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="card bg-base-100 shadow-xl mx-2">
              <figure>
                <img src={clss.image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{clss.name}</h2>
                <p>{clss.description}</p>
                <h3 className="font-bold text-2xl">
                  Instructor: {clss.instructor}
                </h3>
                <div className="flex font-bold">
                  <p>Price: ${clss.price}</p>
                  <p>Available Seats: {clss.available_seats}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="card-actions flex justify-center pb-8">
          <Link to="/allClasses">
            <button className="btn btn-outline btn-error border-0 border-b-4 my-4">
              See All Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default AllClasses;