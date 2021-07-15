import { createStore } from 'redux';

import { ShopReducer } from './ShopReducer';

export default function configureStore(preloadedState) {
    const store = createStore(ShopReducer);

    return store;
}