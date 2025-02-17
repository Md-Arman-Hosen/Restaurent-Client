import Banner from "./Banner";
import CallUs from "./callUs";
import CardWithImgOverlay from "./CardWithImgOverlay";
import Catagory from "./Catagory";
import ChefRecommends from "./ChefRecommends";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu"
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <CardWithImgOverlay></CardWithImgOverlay>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;