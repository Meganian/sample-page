import React  from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";
import {Link} from 'react-router-dom';
import Arrow from './ArrowT';

function PSDWebsitesHeader({classes, title, page})  {

    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <h1 className={classes.h1}>{title}</h1>
                <h2>
                    <Link to="/" className={classes.link}>www.{page}</Link>
                </h2>
                <Arrow/>
            </div>
        </header>
    );
}

const styles = {
    header: {
        width: '100vw',
        height: '56vw',
        paddingLeft: '8vw',
        paddingRight: '8vw',
        position: 'relative',
        background: 'linear-gradient(135deg, rgb(40,185,202),rgb(7, 138, 164))',
        boxSizing: 'border-box'
    },
    content: {
        position: 'absolute',
        maxWidth: '70vw',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'grid',
        gridTemplateColumns:'1fr 1fr',
        boxSizing: 'border-box'
    },
    h1: {
        marginBottom: '7vw',
        gridColumn: '1/-1',
        color: 'white',
        fontWeight: '100',
        '@media (min-width: 1900px)': {
            marginBottom: '150px',
            fontSize: '4.5rem',
        }
    },
    link: {
        opacity: '0.7',
        textTransform: 'none',
        fontSize: '2rem',
        fontWeight: '100',
        '@media (min-width: 440px)': {
            fontSize: '3rem',
        },
        '&:hover': {
            opacity: 1
        }
    }
};

PSDWebsitesHeader.propTypes = {
    title: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
};


export default injectSheet(styles)(PSDWebsitesHeader);