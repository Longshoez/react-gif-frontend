import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../Components/GifGrid/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs') //mocks file calls and controlls data sent and recieved

describe('Testing GifGrid Component', () => {

    const category = "Something"
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
    })
    let wrapper = shallow(<GifGrid category={category}/>)


    test('should render Component', () => {                        
        expect(wrapper).toMatchSnapshot()
    });

    test('should show items when useFetchGids is loaded', () => {
    //Arrange
    const gifs = [{
        id: 'ABC',
        url: 'https://localhost/yeah/yeah.jpg',
        title: 'some some'
    }]
    
    //Act
    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: false,
    })
    let wrapper = shallow(<GifGrid category={category}/>)
    
    //Assert    
    //expect(wrapper).toMatchSnapshot()
    //no p element should exist if gifs are already fetched    
    expect(wrapper.find('p').exists()).toBe(false) 
    expect(wrapper.find('GifContainer').length).toBe(gifs.length)

    });
    
});
