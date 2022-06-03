import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import cartIcon from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import { useGlobalContext} from './Context';


const Navbar = () => {
    const {openMenu, closeCart, toggleCart, amount} = useGlobalContext();

    return (
        <nav className='navbar'>
            <section className='nav-section1'>
                <img src={menu} className="nav-menu-icon" alt='menu-icon' onClick={openMenu} />
                <img src={logo} className="nav-logo" alt='logo'/>
                <ul className='nav-ul'>
                    <li className='nav-li'> <a href="#">Collections</a> </li>
                    <li className='nav-li'> <a href="#">Men</a></li>
                    <li className='nav-li'> <a href="#">Women</a></li>
                    <li className='nav-li'> <a href="#">About</a></li>
                    <li className='nav-li'> <a href="#">Contact</a></li>
                </ul>
            </section>
            <section className='nav-section2' >
                <div style={{position:'relative'}}>
                    <img src={cartIcon} alt="cart" className='cartIcon' onClick={toggleCart}/>
                    {(amount > 0) && <p className='nav-cart-number'>{amount}</p>}
                </div>
                <img src={avatar} alt="avatar" className='avatar' onClick={toggleCart}/>
            </section>
        </nav>
    )
}

export default Navbar;