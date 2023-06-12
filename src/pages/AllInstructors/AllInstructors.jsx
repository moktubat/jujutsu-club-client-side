import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllInstructors = () => {

    const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((result) => {
        setInstructors(result);
      });
  }, []);

    return (
            <div>
      <h2 className="text-5xl font-bold py-8 text-center">
      OUR INSTRUCTORS!
      </h2>

      <div className="flex flex-wrap -m-4 justify-center">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="card bg-base-100 shadow-xl mx-2">
              <figure className="h-96">
                <img className="mt-24" src={instructor.image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{instructor.name}</h2>
                <p>{instructor.description}</p>
                <h3 className="font-bold text-2xl">
                  Instructor: {instructor.instructor}
                </h3>
                <div className="flex font-bold">
                  <p>Price: ${instructor.price}</p>
                  <p>Available Seats: {instructor.available_seats}</p>
                </div>
              </div>
              <div className="card-actions flex justify-center pb-8">
          <Link to="/allInstructors">
            <button className="btn btn-outline btn-error border-0 border-b-4 my-4">
              See Classes
            </button>
          </Link>
        </div>
            </div>
          </div>
        ))}

      </div>
    </div>
    );
};

export default AllInstructors;