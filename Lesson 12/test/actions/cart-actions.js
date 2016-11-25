/**
 * Created by glenp on 25/11/2016.
 */

import { expect } from 'chai';

import { addToCart } from '../../app/actions';

describe('addToCart', () => {

    it('will return an action object of type ADD_TO_CART', () => {
        expect(addToCart(22).type).to.eql('ADD_TO_CART');
    });

    it('will return an action object with a payload of 22 when passed 22', () => {
        expect(addToCart(22).payload).to.eql(22);
    });
});