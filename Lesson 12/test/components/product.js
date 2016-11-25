/**
 * Created by glenp on 25/11/2016.
 */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Product from '../../app/components/Product.jsx';

describe('<Product/>', () => {

    it('should contain one h2 tag', () => {
        let wrapper = shallow(<Product />);

        expect(wrapper.find('h2')).to.have.length(1);
    });

    it('should render a product description', () => {
        let description = 'lorem ipsum';
        let wrapper = shallow(<Product description={description} />);

        expect(wrapper.find('p').text()).to.eql(description);
    });
});