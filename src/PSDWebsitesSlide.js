import React from 'react';
import injectSheet from "react-jss";
import PropTypes from 'prop-types';

function Slide ({classes, background, active}) {

    const slideStyle = {
        // eslint-disable-next-line
        backgroundImage: 'url('+ `${require('./img/'+background)}`+ ')'
    };

    return(
        <div className={`${classes.slide} ${active? classes.active : ""}`} style={slideStyle}> </div>
    )
}

const styles = {
    slide: {
        transition: 'all .4s ease-in-out',
        width: '100%',
        height: '85vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '1',
        display: 'block',
        '@media (min-width: 640px)': {
            height: '29vw',
            width: '33.333vw',
            padding: '0',
            opacity: '1',
            position: 'relative',
            top: '-20px',
            display: 'inline-block',
            verticalAlign: 'top',
            whiteSpace: 'normal',

        }
    },
    active:{
        zIndex: '100',
        opacity: '1',
    }
};

Slide.propTypes = {
    background: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};


export default injectSheet(styles)(Slide);