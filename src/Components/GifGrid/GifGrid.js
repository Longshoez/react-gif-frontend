import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifContainer from '../GifContainer/GifContainer';
import 'animate.css'
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category )

  return (
      <div>
          <h2 className='searchText'>{category}</h2>          
          {loading && <p className='searchText animate__animated animate__flash'>Loading</p>}
          <ol className='gifSearchContainer'>
              {images.map(gif => (
                  <GifContainer title={gif.title} url={gif.url} key={gif.id}/>
              ))}
          </ol>
      </div>
  );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}