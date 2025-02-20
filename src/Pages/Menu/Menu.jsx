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

            {/* Cover */}
            <Cover img={menuimg} title={"Our Menu"} subtitle={"Would You Like To Try a Dish"}></Cover>

             {/* Main Cover */}
            <SectionTitle
               subHeading={"Don't Miss"}
               heading={"Today's Offer"}
            ></SectionTitle>

             {/* Offered menu items*/}
            <MenuCatagory items={offered}></MenuCatagory>

             {/* dessert menu items*/}
             <MenuCatagory 
             items={desserts} 
             title={"Desert"} 
             subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit commodi autem,"} 
             img={dessertimg}
             ></MenuCatagory>

             {/* Pizza menu items*/}
             <MenuCatagory 
             items={pizza} 
             title={"Pizza"} 
             subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit commodi autem,"} 
             img={pizzaimg}
             ></MenuCatagory>

             {/* Salad menu items*/}
             <MenuCatagory 
             items={salad} 
             title={"salad"} 
             subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit commodi autem,"} 
             img={saladimg}
             ></MenuCatagory>

             {/* Soup menu items*/}
             <MenuCatagory 
             items={soup} 
             title={"soup"} 
             subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit commodi autem,"} 
             img={soupimg}
             ></MenuCatagory>
        </section>
    );
};

export default Menu;