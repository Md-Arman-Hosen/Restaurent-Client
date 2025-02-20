import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import useMenu from '../../Hooks/useMenu'
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drink = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Food Craving | Order Food</title>
            </Helmet>

            <Cover img={orderCover} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drink}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;