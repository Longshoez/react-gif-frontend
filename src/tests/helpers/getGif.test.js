import { getGifs } from "../../Helpers/getGifs";

describe('Pruebas en getGifs fetch', () => {
    
    test('fetch 10 elements', async () => {
        //Arrange
        const gifs = await getGifs('mandalorian')    

        //Act

        //Assert
        expect(gifs.length).toBe(10)
    });

    test('Return 0 (nothing) when category is not sent', async () => {
        //Arrange
        const gifs = await getGifs('')

        //Act

        //Assert
        expect(gifs.length).toBe(0)
    });


})