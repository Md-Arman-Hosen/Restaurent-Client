import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;