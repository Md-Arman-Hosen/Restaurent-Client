import { FaAd, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { FaListCheck, FaMessage } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [ cart ] = useCart();
    return (
        <section className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to={"/dashboard/userHome"}>
                            <FaHome></FaHome>
                           User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/reservation"}>
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/payment"}>
                            <FaWallet></FaWallet>
                            Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/cart"}>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/review"}>
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/bookings"}>
                            <FaList></FaList>
                            My Booking</NavLink>
                    </li>
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