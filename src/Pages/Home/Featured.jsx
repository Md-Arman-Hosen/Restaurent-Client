import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredimg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading={"check it out"}
            heading={"Featured item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                   <p>Aug 20,2020</p>
                   <p>Where can i get some?</p> 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit commodi autem, obcaecati eos dolore qui, natus cum aliquid architecto neque tempora quas accusamus ad perspiciatis doloribus, provident officia nisi nam! Eaque animi voluptates soluta accusantium at non vitae cupiditate. Minima, commodi ipsam omnis nam sit vitae doloribus placeat voluptates!</p>
                   <button className="btn btn-outline border-0 border-b-4">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;