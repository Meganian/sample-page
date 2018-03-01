import React  from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";
import Arrow from './ArrowT';

function PSDWebsitesSlider({classes, info})  {

    return (
        <header className={classes.header}>
            <h2 className={classes.h2}>{info}</h2>
            <div className={classes.next}>
                <Arrow/>
            </div>
        </header>
    );
}

const styles = {
    header: {
        width: '100vw',
        height: '23vw',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        background: 'rgb(39, 33, 44)'

    },
    h2: {
        margin: 'auto',
        fontWeight: '100',
        color: 'rgb(151, 135, 165 )',
        '@media (min-width: 800px)': {
            fontSize: '4rem'
        }
    },
    next: {
        height: '100%',
        position: 'relative',
        background: 'rgb(188, 49, 131)',
        display: 'grid'

    }
};

PSDWebsitesSlider.propTypes = {
    info: PropTypes.string.isRequired
};


export default injectSheet(styles)(PSDWebsitesSlider);