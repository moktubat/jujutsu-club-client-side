const Slider = () => {
  return (
    <div>
      <div className="carousel w-full relative">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://samurai.axiomthemes.com/wp-content/uploads/2016/11/slide1.jpg"
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute top-1/2 right-24 transform -translate-y-1/2 text-right">
            <h2 className="text-5xl text-black font-bold uppercase">
              Traditional
              <br />
              Martial
              <br />
              Arts
            </h2>
            <button className="btn btn-outline glass btn-error btn-lg mt-4">
              Explore now
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://samurai.axiomthemes.com/wp-content/uploads/2016/11/slide2.jpg"
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute top-1/2 left-24 transform -translate-y-1/2 text-left">
            <h2 className="text-5xl text-black font-bold uppercase">
              Self-Defence
              <br />
              Training
              <br />
              Class
            </h2>
            <button className="btn btn-outline glass btn-error btn-lg mt-4">
              Explore now
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://samurai.axiomthemes.com/wp-content/uploads/2016/11/slide3.jpg"
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute top-1/2 right-24 transform -translate-y-1/2 text-right">
            <h2 className="text-5xl text-black font-bold uppercase">
              Motivation
              <br />
              Karate
              <br />
              Coach
            </h2>
            <button className="btn btn-outline glass btn-error btn-lg mt-4">
              Explore now
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
