
const reducer = (state, action) => {
    switch(action.type){
        case 'OPEN_MENU':
            return{...state, menuDisplay:true};
        case 'CLOSE_MENU':
            return{...state, menuDisplay:false};
        case 'CLOSE_CART':
            return{...state, cartOpen:false};
        case 'TOGGLE_CART':
            return{...state, cartOpen:!state.cartOpen};
        case 'INCREASE':
            return{...state, currentNumber: state.currentNumber + 1};
        case 'DECREASE':
            let num = state.currentNumber - 1
            if(num < 0){
              num = 0  
            }
            return{...state, currentNumber: num};
        case 'ADD_TO_CART':
            return{...state, amount: state.currentNumber, currentNumber: 0};
        case 'CLEAR_CART':
            return{...state, amount: 0}
        case 'OPEN_SLIDER':
           return{...state, sliderOpen:true} 
        case 'CLOSE_SLIDER':
            return{...state, sliderOpen:false}
        case 'CHANGE_IMAGE':
            return{...state, currentImage:state.pictures[action.payload], currentIndex: state.pictures.indexOf(state.currentImage)}
        case 'CHANGE_INDEX':
            return{...state, currentIndex: action.payload}
        default: 
            return state;
    }
}

export default reducer;