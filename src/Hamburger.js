import React from 'react';
import injectSheet from "react-jss";
import PropTypes from "prop-types";

function Hamburger({classes, toggle, active})  {
    return (
        <div className={`${classes.hamburgerMenu}  `} onClick={toggle}>
            <span className={`${classes.menuItem}  ${active? classes.open :""}`}> </span>
            <span className={`${classes.menuItem}  ${active? classes.open :""}`}> </span>
            <span className={`${classes.menuItem}  ${active? classes.open :""}`}> </span>
        </div>
    );
}

const styles = {
    hamburgerMenu: {
        display: 'inline-block',
        paddingTop: '4.2vw',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transform: 'translateY(-50%)',
        height: '12vw',
        width: '12vw',
        background: 'rgb(32, 37,41)',
        position: 'absolute',
        overflow: 'hidden',
        right: '0',
        '@media (min-width: 440px)': {
            paddingTop: '4.2vw',
        },

    },
    openBtn: {
        transform: 'translateX(-200px)',
    },
    menuItem: {
        margin: '0 auto 2px',
        display: 'block',
        height: '2px',
        width: '4vw',
        background: '#fff',
        transition: 'all 0.3s ease-in-out',
        '@media (min-width: 440px)': {
            height: '4px',
            width: '5vw',
            margin: '0 auto 3px',
        },
        '@media (min-width: 640px)': {
            margin: '0 auto 4px',
        }
    },
    open: {
        '&:first-child': {
            transform: 'translateY(3px) rotate(45deg)',
            '@media (min-width: 440px)': {
                transform: 'translateY(7px) rotate(45deg)',
            },
        },
        '&:nth-child(2)': {
            opacity: '0',
        },
        '&:nth-child(3)': {
            transform: 'translateY(-5px) rotate(-45deg)',
            '@media (min-width: 440px)': {
                transform: 'translateY(-7px) rotate(-45deg)',
            },
        },
        menuItem: {
            background: 'red',
        }

    },
};

Hamburger.propTypes = {
    toggle: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default injectSheet(styles)(Hamburger);