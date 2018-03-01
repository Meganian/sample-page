import React  from 'react';
import injectSheet from "react-jss";
import PropTypes from "prop-types";

function ArrowT({classes, onClick, slider, size})  {

    return (
        <div className={`${classes.wrapper} ${slider? classes.slider : ""}`}  onClick={onClick}>
            <svg className={`${classes.svg1} ${size? classes.large : ""}`} width='18' height='17' viewBox='-1 0 18 17' xmlns='http://www.w3.org/2000/svg'>
                <polygon className={classes.arrowFixed} points='16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596'
                />
            </svg>
            <svg className={`${classes.svg} ${size? classes.large : ""}`} width='18' height='17' viewBox='-1 0 18 17' xmlns='http://www.w3.org/2000/svg'>
                <polygon className={classes.arrow} points='16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596'
                />
            </svg>
        </div>

    );
}

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    slider: {
        width: '100%',
        height: '85vw',
        '@media (min-width: 640px)': {
            height: '29vw',
            width: '34vw',
            float: 'left',
            position: 'absolute',
            zIndex: '1000',
            background: 'rgb(91, 15, 161)'
        }
    },
    svg1:{
        position: 'absolute',
        width: '4vw',
        height: 'auto',
        cursor: 'pointer',
        overflow: 'visible',
        '@media (min-width: 800px)': {
            width: '60px'
        }
    },
    svg: {
        position: 'absolute',
        width: '4vw',
        height: 'auto',
        cursor: 'pointer',
        overflow: 'visible',
        '@media (min-width: 800px)': {
            width: '60px'
        },
        '&:hover': {
            extend: 'arrow2',
            arrowFixed: {
                animation: 'arrowFixedAnim 2.5s cubic-bezier(.2,1,.3,1) infinite',
                transition: 'all 1s cubic-bezier(.2,1,.3,1)',
                fill: '#FF4136'
            },
        },
    },
    large: {
        width: '10vw',
        '@media (min-width: 800px)': {
            width: '60px'
        },
    },
    arrow2: {
        animation: 'arrowAnim 2.5s cubic-bezier(.2,1,.3,1) infinite',
        transition: 'all 1s cubic-bezier(.2,1,.3,1)',
    },
    arrow: {
        transition: 'all 0.5s cubic-bezier(.2,1,.3,1)',
        fill: '#fff'
    },
    arrowFixed: {
        transition: 'all 0.5s cubic-bezier(.2,1,.3,1)',
        fill: '#fff'
    },

    '@keyframes arrowAnim': {
        '0%': {transform: 'translateX(0)', opacity: '1'},
        '5%': {transform: 'translateX(-0.1rem)'},
        '100%': {transform: 'translateX(4rem)', opacity: '0'}
    },
    '@keyframes arrowFixedAnim': {
        '5%': { opacity: '0'},
        '20%': {opacity: '0.4'},
        '100%': {opacity: '1'}
    }
};

ArrowT.propTypes = {
    onClick: PropTypes.func,
    slider: PropTypes.string,
    size: PropTypes.bool
};

export default injectSheet(styles)(ArrowT);