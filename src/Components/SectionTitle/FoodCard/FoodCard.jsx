/* eslint-disable react/prop-types */

const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;

    return (
        <div>
             <div className="card bg-base-100 w-96 shadow-xl rounded-none">
                                <figure>
                                    <img className="w-full"
                                        src={image}
                                        alt="salad"
                                         />
                                </figure>
                                <p className=" absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 text-white">${price}</p>
                                <div className="card-body items-center text-center bg-gray-100">
                                    <h2 className="card-title">{name}</h2>
                                    <p>{recipe}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-outline border-0 border-orange-400 border-b-4 uppercase">add to cart</button>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default FoodCard;