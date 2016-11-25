/**
 * Created by glenp on 25/11/2016.
 */

import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AddProduct from '../../app/components/AddProduct.jsx';

describe('<AddProduct/>', () => {

    it('should respond to click events', () => {
        let handleClick = sinon.spy();
        let wrapper = shallow(<AddProduct handleClick={handleClick}/>);

        wrapper.find('button').simulate('click');

        expect(handleClick.calledOnce).to.equal(true);
    });
});