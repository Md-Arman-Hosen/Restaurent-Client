// import Cover from "../Shared/Cover";
// import chefService from "../../assets/home/chef-service.jpg"
const CardWithImgOverlay = () => {
    return (
        <div className="chef-service w-full">
            <div className="w-10 pb-28">
            </div>
            <div className="card-body bg-gray-100  w-3/4 mx-auto items-center">
                <h2 className="card-title text-4xl font-bold pb-5">Food Craving</h2>
                <p className="text-center pb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cupiditate sapiente. Quos nemo dicta debitis, possimus ullam earum quam reiciendis incidunt nostrum nulla consequuntur deleniti quis, quisquam distinctio laudantium officiis?</p>
            </div>
            <div className="w-10 pt-28">
            </div>
        </div>
        // <div>
        //     <Cover
        //     img={chefService}
        //     title="Food Craving"
        //     subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cupiditate sapiente. Quos nemo dicta debitis, possimus ullam earum quam reiciendis incidunt nostrum nulla consequuntur deleniti quis, quisquam distinctio laudantium officiis?"
        //     ></Cover>
        // </div>
    );
};

export default CardWithImgOverlay;