import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ProductsControllersMobile from '../../components/ProductsControllersMobile/ProductsControllersMobile.jsx';
import ProductsControllersDesktop from '../../components/ProductsControllersDesktop/ProductsControllersDesktop.jsx';

import useIsMobile from "../../shared/hooks/useIsMobile.js"

import "./styles/style.css"


function Catalog() {
    return (
        <>        
            <Navbar/>
            <main className="container">
                <ProductsControllers>
                    <Outlet/>
                </ProductsControllers>
            </main>
            <Footer/>
        </>
    )
}


const ProductsControllers = ({ children }) => {
    const isMobile = useIsMobile(960);

    if (!isMobile) return (
        <ProductsControllersDesktop>
            <Box className="products__grid">
                { children }
            </Box>
        </ProductsControllersDesktop>
    );

    if (isMobile) return (
        <Box>
            <ProductsControllersMobile/>
            <Box className="products__grid">
                { children }
            </Box>
        </Box>
    );
}

export default Catalog