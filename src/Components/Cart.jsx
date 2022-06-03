import { useGlobalContext } from "./Context";
import thumbnail from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';

const Cart = () => {
    const { amount, clearCart, closeCart} = useGlobalContext();

    const handleClick = (event) => {
        if(event.target.classList.contains('cart-container')){
            closeCart();
        }
    }

    return(
        <div className="cart-container" onClick={handleClick}>
            <section className="cart">
                <p>Cart</p>
                {(amount > 0) ? 
                <>
                    <article>
                        <img src={thumbnail} alt="thumbnail" className="cart-thumbnail" />
                        <div>
                            <p>Autumn Limited Edition Sneaker</p>
                            <p>$125.00 x {amount} <b>${amount * 125}</b> </p>
                        </div>
                        <img src={deleteIcon} alt="delete" className="cart-delete" onClick={clearCart}/>
                    </article>
                    <div style={{padding: '0 1rem'}}><button className="cart-btn">Checkout</button></div> 
                </> : 
                <div style={{padding: "4rem"}}>Your cart is empty.</div>
                }                
            </section>
        </div>
        
    )
}

export default Cart;