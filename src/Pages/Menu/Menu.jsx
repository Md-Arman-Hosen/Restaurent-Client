import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuimg from '../../assets/menu/banner3.jpg'
import dessertimg from '../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import soupimg from '../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCatagory from './MenuCatagory';
import useMenu from '../../Hooks/useMenu'
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <section>
            <Helmet>
                <title>Food Craving | Menu</title>
            </Helmet>

            <Cover img={menuimg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCatagory items={offered}></MenuCatagory>
            {/* dessert menu items  */}
            <MenuCatagory items={desserts} subtitle={"lorem10"} title="dessert" img={dessertimg}></MenuCatagory>
            <MenuCatagory items={pizza} subtitle={"lorem10"} title={"pizza"} img={pizzaimg}></MenuCatagory>
            <MenuCatagory items={salad} subtitle={"lorem10"} title={"salad"} img={saladimg}></MenuCatagory>
            <MenuCatagory items={soup} subtitle={"lorem10"} title={"soup"} img={soupimg}></MenuCatagory>
        </section>
    );
};

export default Menu;