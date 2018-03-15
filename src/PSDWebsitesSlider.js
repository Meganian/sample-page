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
        //width: '100vw',
        height: '23vw',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridColumns: '1fr 1fr 1fr 1fr',
        background: 'rgb(39, 33, 44)'

    },
    h2: {
        margin: 'auto',
        //paddingTop: '100px',
        //height: '23vw',
        gridColumn: '1',
        gridColumn: '1/4',
        gridColumnSpan: '3',
        fontWeight: '100',
        color: 'rgb(151, 135, 165 )',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 800px)': {
            fontSize: '4rem'
        }
    },
    next: {
        height: '23vw',
        gridColumn: '4',
        gridColumnSpan: '1',
        position: 'relative',
        background: 'rgb(188, 49, 131)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

PSDWebsitesSlider.propTypes = {
    info: PropTypes.string.isRequired
};


export default injectSheet(styles)(PSDWebsitesSlider);