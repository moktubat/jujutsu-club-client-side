import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((result) => {
        setClasses(result);
      });
  }, []);

  return (
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
          <div className="card-actions flex justify-center">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default PopularClasses;
