import {  FaBook, FaHome, FaList, FaShoppingBag, FaUser, FaUtensils } from "react-icons/fa";
import { FaListCheck, FaMessage } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    //isAdmin value from db
    const isAdmin = true;
    return (
        <section className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to={"/dashboard/adminHome"}>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/addItems"}>
                                        <FaUtensils></FaUtensils>
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/ManageItems"}>
                                        <FaList></FaList>
                                       Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageBooking"}>
                                        <FaBook></FaBook>
                                        Manage Booking</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/allUsers"}>
                                        <FaUser></FaUser>
                                        All Users</NavLink>
                                </li>
                            </>
                            :
                            <>

                            </>
                    }

                    {/* shared nav links */}
                    <div className="divider"></div>

                    <li>
                        <NavLink to={"/"}>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}>
                            <FaListCheck></FaListCheck>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}>
                            <FaShoppingBag></FaShoppingBag>
                            Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}>
                            <FaMessage></FaMessage>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Dashboard;