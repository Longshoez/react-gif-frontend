import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Testing useFetchGif hook', () => {

    const category = 'mandalorian'
    
    test('should return initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs(category) )
        const { data, loading } = result.current

        console.log(data, loading);

        
    });

});