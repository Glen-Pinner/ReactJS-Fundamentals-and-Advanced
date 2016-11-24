/**
 * Created by glenp on 24/11/2016.
 */

import { combineReducers } from 'redux';

import products from './products';
import shoppingCart from './shopping-cart';

let reducer = combineReducers({ products, shoppingCart });
export default reducer;