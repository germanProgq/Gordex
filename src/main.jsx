import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./reset.css"
import "./layout.css"
import { ThemeProvider, createTheme } from '@mui/material'


import Root from "./routes/Root/Root"
import Catalog from "./routes/Catalog/Catalog"
import Electronic from "./routes/Catalog/Electronics/Electronics"
import Clothing from "./routes/Catalog/Clothing/Clothing"
import Shoes from "./routes/Catalog/Shoes/Shoes"
import Bags from "./routes/Catalog/Bags/Bags"
import Accessories from "./routes/Catalog/Accessories/Accessories"

import About from "./routes/FooterPages/About/About"
import Returns from "./routes/FooterPages/Returns/Returns"
import Shipping from "./routes/FooterPages/Shipping/Shipping"
import Authenticity from "./routes/FooterPages/Authenticity/Authenticity"
import Partnership from "./routes/FooterPages/Partnership/Partnership"
import Brands from "./routes/FooterPages/Brands/Brands"
import Referral from "./routes/FooterPages/Referral/Referral"
import Rules from "./routes/FooterPages/Rules/Rules"
import Api from "./routes/FooterPages/Api/Api"
import Faqs from "./routes/FooterPages/Faqs/Faqs"
import Privacy from "./routes/FooterPages/Privacy/Privacy"
import Admin from "./routes/Admin/Admin"
import MetricsPage from "./routes/Admin/MetricsPage/MetricsPage"
import PaymentPage from "./routes/Admin/PaymentPage/PaymentPage"
import EditorPage from "./routes/Admin/EditorPage/EditorPage"
import GoodsPage from "./routes/Admin/GoodsPage/GoodsPage"
import Product from './routes/Product/Product'
import ProductNew from './routes/ProductNew/ProductNew'
import Profile from './routes/Profile/Profile'
import Login from './routes/Login/Login'
import Payment from './routes/Payment/Payment'
import ShoppingCard from './routes/Payment/ShoppingCard'
import WalletFirst from './routes/WalletFirst/WalletFirst'
import WalletSecond from './routes/WalletSecond/WalletSecond'
import Checkout from './routes/Payment/Checkout'
import Finish from './routes/Payment/Finish'
import Info from './routes/FooterPages/Layout'
import Support from './routes/Support/Support'
import MobileApps from './routes/MobileApps/MobileApps'
import PaymentFiat from './routes/PaymentFiat/PaymentFiat'
import PaymentBasket from './routes/PaymentBasket/PaymentBasket'
import Error404 from './routes/404/Error404'
import SearchResults from './routes/Product/search/searchResults'

import { UserProvider } from './token/provider'



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>
    },
    {
        path: "/search",
        element: <SearchResults/>,
    },
    {
        path: "/catalog",
        element: <Catalog/>,
        children: [
            {
                path: "/catalog/electronic",
                element: <Electronic/>,
            },
            {
                path: "/catalog/clothing",
                element: <Clothing/>,
            },
            {
                path: "/catalog/shoes",
                element: <Shoes/>
            },
            {
                path: "/catalog/bags",
                element: <Bags/>
            }, 
            {
                path: "/catalog/accessories",
                element: <Accessories/>
            }
        ]
    },
    {
        path: "/product",
        element: <Product/>
    },
    {
        path: "/payment-fiat",
        element: <PaymentFiat/>
    },
    {
        path: "/payment-basket",
        element: <PaymentBasket/>
    },
    {
        path: "/product-new",
        element: <ProductNew/>
    },
    {
      path: "/wallet-second",
      element: <WalletSecond/>  
    },
    {
      path: "/wallet-first",
      element: <WalletFirst/>  
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/admin",
        element: <Admin/>,
        children: [
            {
                path: "/admin/metrics",
                element: <MetricsPage/>
            },
            {
                path: "/admin/editor",
                element: <EditorPage/>
            },
            {
                path: "/admin/goods",
                element: <GoodsPage/>
            },
            {
                path: "/admin/payment",
                element: <PaymentPage/>
            },            
            {
                path: "/admin/users",
                element: <></>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/payment",
        element: <Payment/>,
        children: [
            {
                path: "/payment/shoppingCard",
                element: <ShoppingCard/>
            },
            {
                path: "/payment/checkout",
                element: <Checkout/>
            },
            {
                path: "/payment/finish",
                element: <Finish/>
            },
        ]
    },
    {
        path: "/info",
        element: <Info/>,
        children: [
            {
                path: "/info/returns",
                element: <Returns/>
            },
            {
                path: "/info/shipping",
                element: <Shipping/>
            },
            {
                path: "/info/authenticity",
                element: <Authenticity/>
            }, 
            {
                path: "/info/about",
                element: <About/>
            },
            {
                path: "/info/partnership",
                element: <Partnership/>
            },
            {
                path: "/info/brands",
                element: <Brands/>
            },
            {
                path: "/info/referral",
                element: <Referral/>
            },
            {
                path: "/info/rules",
                element: <Rules/>
            },
            {
                path: "/info/api",
                element: <Api/>
            },
            {
                path: "/info/faqs",
                element: <Faqs/>
            },
            {
                path: "/info/privacy",
                element: <Privacy/>
            },
        ]
    },
    {
        path: "/support",
        element: <Support/>
    },
    {
        path: "/mobile",
        element: <MobileApps/>
    },
    {
        path: "/not-found",
        element: <Error404/>
    },
])

const theme = createTheme({
    typography: {
        "fontFamily": "ubuntu"
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <UserProvider>
            <RouterProvider router={router}/>
        </UserProvider>
    </ThemeProvider>
)
