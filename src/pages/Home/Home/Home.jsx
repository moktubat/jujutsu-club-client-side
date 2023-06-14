import useTitle from "../../../hook/useTitel";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Gallery></Gallery>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
