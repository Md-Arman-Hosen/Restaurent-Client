/* eslint-disable react/prop-types */
import Cover from "../Shared/Cover";
import MenuItems from "../Shared/Footer/MenuItem/MenuItems";
const MenuCatagory = ({items, title ,img ,subtitle }) => {
    return (
        <div className="pt-8">
            { title && subtitle && <Cover img={img} title={title} subtitle={subtitle} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCatagory;