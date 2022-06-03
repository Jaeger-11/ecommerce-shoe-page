import React,{ useContext, useReducer } from "react";
import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';
import reducer
 from "./reducer";
const AppContext = React.createContext();

const images = [product1, product2, product3, product4];
const defaultState = { 
    price: 125,
    amount: 0,
    menuDisplay: false,
    cartOpen: false,
    currentNumber: 0,
    sliderOpen: false,
    pictures: images,
    currentImage: images[0],
    currentIndex: 0
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const openMenu = () => {
        dispatch({type:'OPEN_MENU'})
    }
    const closeMenu = () => {
        dispatch({type:'CLOSE_MENU'});
    }
    const toggleCart = () => {
        dispatch({type:'TOGGLE_CART'});
    }
    const closeCart = () => {
        dispatch({type:'CLOSE_CART'});
    }
    const increase = () => {
        dispatch({type:'INCREASE'})
    }
    const decrease = () => {
        dispatch({type:'DECREASE'})
    }
    const addToCart = () => {
        dispatch({type: 'ADD_TO_CART'})
    }
    const clearCart = () =>{
        dispatch({type: 'CLEAR_CART'})
    }
    const openSlider = () => {
        dispatch({type: 'OPEN_SLIDER'})
    }
    const closeSlider = () => {
        dispatch({type: 'CLOSE_SLIDER'})
    }
    const changeImage = (id) => {
        dispatch({type:'CHANGE_IMAGE', payload: id})
    }
    const changeIndex = (ind) => {
        dispatch({type: 'CHANGE_INDEX', payload: ind})
    }

    return(
        <AppContext.Provider
            value={{
                ...state,
                openMenu,
                closeCart,
                closeMenu,
                toggleCart,
                increase,
                decrease,
                addToCart,
                clearCart,
                openSlider,
                closeSlider,
                changeImage,
                changeIndex
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider};