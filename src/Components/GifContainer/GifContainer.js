import React from 'react';
import 'animate.css'
import PropTypes from 'prop-types';


const GifContainer = ({title, url, id}) => {
  return(
    <div key={id} className='gifComponent animate__animated animate__fadeIn'>
        {/**<h2 className='gifTitle'>{(title.length > 25) ? (title.substring(0, 25) + "...") : (title)}</h2>*/}
        <h2 className='gifTitle'>{title}</h2>
        <img className='gifImage' src={url} alt={title} />
    </div>
  );
};

GifContainer.propTypes = {
    title: PropTypes.string.isRequired,  
    url: PropTypes.string.isRequired,
}

export default GifContainer