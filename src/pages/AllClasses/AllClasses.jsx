import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const isLoggedInAsAdmin = true;
  const isLoggedInAsInstructor = true;

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((result) => {
        setClasses(result);
      });
  }, []);
  return (
    <div className="mb-12">
      <div
        className="bg-gradient-to-r from-red-600 to-yellow-400 rounded-b-lg mb-12"
        style={{ height: "200px" }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          {/* Text */}
          <div className="flex flex-col justify-center w-1/2 pb-4 rounded-b-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">ALL CLASSES!</h2>
            <p className="text-lg text-white">
              Summer camps offer an immersive experience and a unique <br />
              opportunity to train with skilled instructors, meet other
              passionate <br /> martial artists, and explore new cultures and
              locations.
            </p>
          </div>

          {/* Image */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="https://www.seekpng.com/png/full/160-1609772_kids-martial-arts-martial-arts-kid-png.png"
              alt="Mountain"
              className="w-50 h-40 object-cover pb-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4 justify-center">
        {classes.map((clss) => (
          <div
            key={clss._id}
            className={`w-full sm:w-1/2 lg:w-1/3 p-4 ${
              clss.available_seats === 0 ? "bg-red-600 rounded-lg" : "bg-base-100"
            }`}
          >
            <div
              className="card bg-base-100 shadow-xl mx-2"
              style={{ height: "680px" }}
            >
              <figure>
                <img src={clss.image} alt="Album" />
              </figure>
              <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">{clss.name}</h2>
                <p>{clss.description}</p>
                <h3 className="font-semibold text-2xl">
                  Instructor: {clss.instructor}
                </h3>
                <div className="flex font-bold">
                  <p>Price: ${clss.price}</p>
                  <p>Available Seats: {clss.available_seats}</p>
                </div>
              </div>
              <div className="card-actions flex justify-center pb-8">
                {clss.available_seats === 0 ||
                isLoggedInAsAdmin ||
                isLoggedInAsInstructor ? (
                  <button
                    className="btn btn-outline btn-error border-0 border-b-4 my-4"
                    disabled
                  >
                    Enroll Class
                  </button>
                ) : (
                  <Link to="/allClasses">
                    <button className="btn btn-outline btn-error border-0 border-b-4 my-4">
                      Enroll Class
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
