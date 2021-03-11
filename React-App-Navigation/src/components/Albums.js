import React from "react";
import PropTypes from 'prop-types';
//import movies from './Data';

function Albums({album, MovieName, musicDirector}){
    return(
        <div>
          <card>
          <h3>{MovieName}</h3>
      <div>{album}</div>
      <div>{musicDirector.join(', ')}.</div>
      </card>
        </div>
    );
    }
Albums.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    musicDirector: PropTypes.arrayOf(PropTypes.string).isRequired,   
  }

  

export default Albums;

