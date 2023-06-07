const Slider = () => {
    return (
      <div>
        <div className="carousel w-full relative">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://png.pngtree.com/background/20210711/original/pngtree-simple-outdoor-summer-camp-poster-picture-image_1121652.jpg"
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
              src="https://png.pngtree.com/background/20210711/original/pngtree-simple-outdoor-summer-camp-background-material-picture-image_1089632.jpg"
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
              src="https://png.pngtree.com/background/20210711/original/pngtree-summer-camp-banner-background-picture-image_1089339.jpg"
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
  