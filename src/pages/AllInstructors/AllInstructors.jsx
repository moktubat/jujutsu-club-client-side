import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitel";

const AllInstructors = () => {
  useTitle("Instructors");
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-moktubat.vercel.app/instructors")
      .then((res) => res.json())
      .then((result) => {
        setInstructors(result);
      });
  }, []);

  return (
    <div>
      <div
        className="bg-gradient-to-r from-red-600 to-yellow-400 rounded-b-lg mb-8"
        style={{ height: "200px" }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          {/* Text */}
          <div className="flex flex-col justify-center w-1/2 pb-4 rounded-b-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              OUR INSTRUCTORS!
            </h2>
            <p className="text-lg text-white">
              An instructor is a teacher. One can be an instructor of just about{" "}
              <br /> anything, but it usually applies to teaching hands-on
              skills.
            </p>
          </div>

          {/* Image */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="https://karate.w3itexperts.com/xhtml/images/slider/mountainpng-1.png"
              alt="Mountain"
              className="w-50 h-40 object-cover pb-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -m-4 justify-center">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="card bg-base-100 shadow-xl mx-2">
              <figure className="h-96">
                <img className="mt-24" src={instructor.image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{instructor.name}</h2>
                <h3 className="font-bold">
                  Email:{" "}
                  <a className="underline" href={`mailto:${instructor.email}`}>
                    {instructor.email}
                  </a>
                </h3>

                <div>
                  <p>Number of Classes: {instructor.classes_taken}</p>
                  <p>
                    Name of the Classes:
                    <ul>
                      {instructor.classes.map((className) => (
                        <li key={className}>{className}</li>
                      ))}
                    </ul>
                  </p>
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
