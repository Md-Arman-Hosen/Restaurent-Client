/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItems from "../Shared/Footer/MenuItem/MenuItems";
const MenuCatagory = ({ items, title, img, subtitle }) => {
    return (
        <div className="pt-8">
            {title && subtitle && <Cover img={img} title={title} subtitle={subtitle} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase text-xl">Order your favourite food Now</button></Link>
        </div>
    );
};

export default MenuCatagory;