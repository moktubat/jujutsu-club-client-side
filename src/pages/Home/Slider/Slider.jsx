import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <Carousel
      showStatus={false}
      autoPlay
      infiniteLoop
      showIndicators
      renderIndicator={(onClickHandler, isSelected) => {
        if (isSelected) {
          return (
            <li
              className="inline-block mx-1 w-4 h-4 rounded-full bg-red-500 cursor-pointer"
              onClick={onClickHandler}
            />
          );
        }
        return (
          <li
            className="inline-block mx-1 w-4 h-4 rounded-full bg-gray-500 cursor-pointer"
            onClick={onClickHandler}
          />
        );
      }}
    >
      {/* Slide 1 */}
      <div className="flex items-center">
        <div className="w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/youth-summer-holiday-concept-basketball-tennis-summer-camps-karate-vacation-program_566886-2849.jpg?w=2000"
            alt="Slider Image 1"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Traditional Martial Arts</h2>
          <p className="text-lg">
            The traditional martial arts that cover armed <br /> combat often encompass
            a wide spectrum of melee <br /> weapons, including bladed weapons and
            polearms.
          </p>
          <button className="btn btn-outline glass btn-error btn-lg mt-4">
              Payment Now
            </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="flex items-center flex-row-reverse">
        <div className="w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/guys-karate-sparring-training-boy-hits-foot-illustration_275655-152.jpg?w=2000"
            alt="Slider Image 2"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Self-Defence Training Class</h2>
          <p className="text-lg">
            Learn the best self defense strategies and techniques <br /> from top-rated
            our instructors. Whether you are <br /> interested in self defense for
            women, advanced combat.
          </p>
          <button className="btn btn-outline glass btn-error btn-lg mt-4">
              Explore now
            </button>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="flex items-center">
        <div className="w-1/2">
          <img
            src="https://img.freepik.com/free-vector/paralympic-taekwondo-concept-illustration_114360-18304.jpg?w=2000"
            alt="Slider Image 3"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Motivation of Karate Coach</h2>
          <p className="text-lg">
            The most fundamental way to preserve motivation<br /> during martial arts
            training is to identify and recall the<br /> purpose behind beginning the
            discipline.
          </p>
          <button className="btn btn-outline glass btn-error btn-lg mt-4">
              Explore now
            </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
