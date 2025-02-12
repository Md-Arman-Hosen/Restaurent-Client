import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu"
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;