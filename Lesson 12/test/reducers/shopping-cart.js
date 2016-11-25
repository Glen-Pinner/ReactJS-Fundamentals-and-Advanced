/**
 * Created by glenp on 25/11/2016.
 */

import { expect } from 'chai';

import shoppingCart from '../../app/reducers/shopping-cart';

describe('shoppingCart reducer', () => {

    it('can add new products', () => {
        expect(shoppingCart([], { type: 'ADD_TO_CART', payload: 22 }))
            .to.eql([22]);
    });

    it('can remove products', () => {
        let state = [];

        state = shoppingCart(state, { type: 'ADD_TO_CART', payload: 22 });

        expect(shoppingCart([], { type: 'REMOVE_FROM_CART', payload: 22 }))
            .to.eql([]);
    });

});

