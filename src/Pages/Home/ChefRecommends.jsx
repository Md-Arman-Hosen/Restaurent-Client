import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import salad from "../../assets/menu/salad-bg.jpg"
const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"Chef recommends"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 mx-5">
                <div className="card bg-base-100 w-96 shadow-xl rounded-none">
                    <figure>
                        <img
                            src={salad}
                            alt="salad"
                             />
                    </figure>
                    <div className="card-body items-center text-center bg-gray-100">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl rounded-none">
                    <figure>
                        <img
                            src={salad}
                            alt="salad"
                             />
                    </figure>
                    <div className="card-body items-center text-center bg-gray-100">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl rounded-none">
                    <figure>
                        <img
                            src={salad}
                            alt="salad"
                             />
                    </figure>
                    <div className="card-body items-center text-center bg-gray-100">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default ChefRecommends;