import { createStore } from 'redux';
import { ACTION_HOME } from '../actions/products';

const INITIAL_STATE = {
    productList: [],
    cart: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_HOME:
            return { ...state, productList: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;