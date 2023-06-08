const Slider = () => {
    return (
      <div>
        <div className="carousel w-full relative">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://taekwondo-berlin.com/wp-content/uploads/2017/06/young-girl-training-karate-on-blue-background-PYAMLMQ.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-5xl text-black font-bold uppercase">make your summer </h2>
              <h3 className="italic font-bold text-4xl">unforgettable</h3>
              <button className="btn btn-outline glass btn-error btn-lg mt-4">Explore now</button>
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
              src="https://i0.wp.com/sana-edu.com/wp-content/uploads/2022/10/1.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-5xl text-black font-bold uppercase">make your summer </h2>
              <h3 className="italic font-bold text-4xl">unforgettable</h3>
              <button className="btn btn-outline glass btn-error btn-lg mt-4">Explore now</button>
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
              src="https://fight2win.nl/wp-content/uploads/sites/2/2019/06/Fight2Win-nieuws-voordelen-van-kickboksen-voor-kinderen.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-5xl text-black font-bold uppercase">make your summer </h2>
              <h3 className="italic font-bold text-4xl">unforgettable</h3>
              <button className="btn btn-outline glass btn-error btn-lg mt-4">Explore now</button>
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
  