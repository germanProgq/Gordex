import { Box } from "@mui/material"
import Categories from "../Categories/Categories"
import ProductsFilter from "../ProductsFilter/ProductsFilter"

function ProductsControllersDesktop({ children }) {
    return (
        <Box>
            <Categories/>
            <Box className="products__filter-grid__container">
                <ProductsFilter/>
                { children }
            </Box>
        </Box>
    )
}

export default ProductsControllersDesktop