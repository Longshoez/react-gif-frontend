import React from 'react';
import {shallow} from 'enzyme';
import GifContainer from '../../Components/GifContainer/GifContainer';

describe('Pruebas en el componente GifContainer', () => {
    
    const title ="a title"
    const url ="https://localhost/somesome.jpg"
    
    let wrapper = shallow(<GifContainer title={title} url={url}/>)

    // beforeEach(() => {
    //     wraper = shallow(<GifContainer />)
    // })

    test('Renderizar componente', () => {
        //Arrarnge
        //wraper declaerd in upper scope

        //Act
        //Assert
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe tener un h2 en el titulo', () => {
        //Arrange        
        
        //Act        
        const value = wrapper.find('h2')

        //Assert
        expect(value.text().trim()).toBe(title)
    });

    test('Debe tener un url y un alt en el elemento Img', () => {
        //Arrange        
        
        //Act        
        const image = wrapper.find('img')
        //console.log(image.props()); //props (by enzyme) lets you evaluate the properties of certain html element
        //Assert
        expect(image.prop('src')).toBe(url)
        expect(image.prop('alt')).toBe(title)
    });

    test('Debe tener la clase de animacion', () => {
        //Arrange        
        
        //Act        
        const div = wrapper.find('div')
        //console.log(div.prop('className')); //props (by enzyme) lets you evaluate the properties of certain html element

        //Assert
        expect(div.prop('className')).toContain('animate__animated')
        expect(div.prop('className')).toContain('animate__fadeIn')
        //course version
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    });
})

