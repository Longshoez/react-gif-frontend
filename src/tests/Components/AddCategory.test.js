import React from 'react';
import {shallow} from 'enzyme';
import {AddCategory} from '../../Components/AddCategorry/AddCategory';

describe('', () => {

    /*const setCategories = () => {}*/
    /*the component requires this function but it wont neccesarily be used so we declare it to pass it on 
    the component's props.
    jest already has tha mock function feature, so insteado of writing it as a normal function we do...*/
    const setCategories = jest.fn() //now we can get when was it called, how and where

    let wrapper //initializing the wrapper

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>) //resets the component
    })


    test('should render correctly', () => {

      expect(wrapper).toMatchSnapshot()

    });


    test('should change text input', () => {
        //Arrange
        const input  = wrapper.find('input')
        const value = "el texto"

        //Act
        //inside the brackets we type the value of whatever we are sending to the input
        input.simulate('change', {target:{value}}) 

        //Assert
        expect( wrapper.find('p').text().trim() ).toBe(value)

    });

    test('shouldnt post the data on submit', () => {
        //Arrange        
        const form = wrapper.find('form')
        //Act
        form.simulate('submit', { preventDefault(){} }) // or preventDefault: () => {}
        //since we dont have an input value in handlesubmit, the function shouldnt be called

        //Assert
        expect(setCategories).not.toHaveBeenCalled() //bunch of interesting tohavebeen functions
    });


    test('should call setCategories and clean the textbox', () => {
        
        //Arrange
        const input = wrapper.find('input')
        const form = wrapper.find('form')
        const value = 'text'        
        
        //Act
        //simulate inputchange
        input.simulate('change', {target: {value} })
        //simulate submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        
        //Assert

        //should call setCategories        
        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledTimes(1)
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)) 

        //input value should be an empty string
        expect(wrapper.find('input').prop('value')).toBe('')
        
    });
    
})