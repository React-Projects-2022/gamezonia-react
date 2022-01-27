import { Cart } from "@mugan86/react-shop-ui";
import { navigateTo } from "./../../helpers/navigate"

const ShoppingCart = () => {
    
    return (
        <div className="container mb-5">
            <Cart navigateTo={navigateTo}/>
        </div>
        
    )
} 

export default ShoppingCart;