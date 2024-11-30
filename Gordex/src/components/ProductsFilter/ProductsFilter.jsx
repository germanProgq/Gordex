import ProductsAccordion from "./ProductsAccordion/ProductsAccordion"
import "./styles/style.css"

function ProductsFilter() {
    return (
        <ul className="products__list">
            <ProductsAccordion AccordionName={"Sorting"}/>
            <ProductsAccordion AccordionName={"All Categories"}/>
            <ProductsAccordion AccordionName={"Brands"}/>
            <ProductsAccordion AccordionName={"Price Range"}/>
            <ProductsAccordion AccordionName={"Delivery"}/>
        </ul>
    )
}

export default ProductsFilter