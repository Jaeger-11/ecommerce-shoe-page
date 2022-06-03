import close from '../images/icon-close.svg';
import { useGlobalContext } from './Context';

const Menu = () => {
    const {closeMenu} = useGlobalContext();
    const handleClick = (event) => {
        if(event.target.classList.contains('menu-container')){
            closeMenu();
        }
    }

    return( 
        <div className='menu-container' onClick={handleClick}>
            <section className='menu' >
                <img src={close} alt="close" className='menu-image' onClick={closeMenu}/>
                <ul className='menu-ul'>
                    <li className='menu-li' onClick={closeMenu}>Collections</li>
                    <li className='menu-li' onClick={closeMenu}>Men</li>
                    <li className='menu-li' onClick={closeMenu}>Women</li>
                    <li className='menu-li' onClick={closeMenu}>About</li>
                    <li className='menu-li'onClick={closeMenu}>Contact</li>
                </ul>
            </section>
        </div>
    )
}

export default Menu;