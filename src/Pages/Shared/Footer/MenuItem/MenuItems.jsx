
// eslint-disable-next-line react/prop-types
const MenuItems = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { name, image, recipe, price } = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;