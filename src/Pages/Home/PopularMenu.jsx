import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../Hooks/UseMenu";
import MenuCatagory from "../Menu/MenuCatagory";

const PopularMenu = () => {
        const [menu]=UseMenu();
        const popular = menu.filter(item =>item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular items"}
            ></SectionTitle>
           <MenuCatagory items={popular} ></MenuCatagory>
        </section>
    );
};

export default PopularMenu;