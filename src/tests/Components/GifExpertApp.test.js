import React from 'react';
import {shallow} from 'enzyme';
import {GifExpertApp} from '../../Components/GifExpertApp/GifExpertApp';

describe('Testing GifExpertApp Component', () => {

    let wrapper = shallow(<GifExpertApp />)
    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />)
    })

    test('component should render', () => {
        expect(wrapper).toMatchSnapshot()
    });


    test('should  show a category list', () => {
        //Arrange
        const categories = ['mandalorian', 'star wars']
        wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)        

        //Act

        //Assert
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    });
});