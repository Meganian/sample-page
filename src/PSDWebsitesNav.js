import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import injectSheet from "react-jss";
import Hamburger from './Hamburger';
import MediaQuery from 'react-responsive';

class PSDWebsitesNav extends Component {
    constructor(props) {
        super(props);
        this.state ={
            mobileMenu: false
        };
    }

    handleToggle(e) {
        e.preventDefault();
        return this.setState({
            mobileMenu: !this.state.mobileMenu
        });
    }


    render() {
        const {classes} = this.props;

        return (
            <header className={`${classes.header} ${this.state.mobileMenu? classes.mobileOpen : ""}`} >
                <nav className={classes.nav}>
                    <MediaQuery query="(min-device-width: 641px)">
                        <ul>
                            <li className={classes.li}>
                                <Link to="/">PSD Websites</Link>
                            </li>
                            <li className={classes.li}>
                                <Link to="/uikits">UIKits</Link>
                            </li>
                            <li className={classes.li}>
                                <Link to="/premium">Premium PSD Files</Link>
                            </li>
                            <li className={classes.li}>
                                <Link to="/about">About</Link>
                            </li>
                            <li className={classes.li}>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </MediaQuery>

                    <MediaQuery query="(max-device-width: 640px)">
                        <div className={classes.mobileNavHeader}>Navigation</div>
                        <div className={classes.mobileNav}>
                            <Hamburger active={this.state.mobileMenu} toggle={(e)=> this.handleToggle(e)}/>
                            <ul className={`${this.state.mobileMenu? classes.mobileOpenList : classes.mobileCloseList} `}>
                                <li className={`${classes.li} ${this.state.mobileMenu? classes.mobileOpenLi : ""}`} onClick={(e)=> this.handleToggle(e)}>
                                    <Link to="/">PSD Websites</Link>
                                </li>
                                <li className={`${classes.li} ${this.state.mobileMenu? classes.mobileOpenLi : ""}`} onClick={(e)=> this.handleToggle(e)}>
                                    <Link to="/uikits">UIKits</Link>
                                </li>
                                <li className={`${classes.li} ${this.state.mobileMenu? classes.mobileOpenLi : ""}`} onClick={(e)=> this.handleToggle(e)}>
                                    <Link to="/premium">Premium PSD Files</Link>
                                </li>
                                <li className={`${classes.li} ${this.state.mobileMenu? classes.mobileOpenLi : ""}`} onClick={(e)=> this.handleToggle(e)}>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className={`${classes.li} ${this.state.mobileMenu? classes.mobileOpenLi : ""}`} onClick={(e)=> this.handleToggle(e)}>
                                    <Link to="/blog">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </MediaQuery>
                </nav>
            </header>
        );
    }
}
const styles = {
    header:{
        backgroundColor: 'rgb(55, 60, 63)',
        height: '10vw',
        color: 'white',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
        '@media (min-width: 441px)': {
            height: '12vw',
        }
    },
    mobileOpen: {
        overflow: 'visible'
    },
    nav: {
        position: 'absolute',
        width: '100vw',
        top: '50%',
        padding: '0 3.5vw',
        transform: 'translateY(-50%)',
        zIndex: '10',
        boxSizing: 'border-box',
        '@media (min-width: 641px)': {
            left: '0',
            padding: '0',
        }
    },
    mobileNav: {
        position: 'absolute',
        transform: 'translateY(-50%)',
        top: '50%',
        right: '0',
    },
    mobileCloseList: {
        position: 'absolute',
        right: '-200px',
        marginTop: '4vw',
        width: '200px',
        backgroundColor: 'rgb(55, 60, 63)',
        transition: 'all 0.3s ease-in-out',
        boxSizing: 'border-box',

    },
    mobileOpenList: {
        right: '0',
        position: 'absolute',
        marginTop: '4vw',
        width: '240px',
        backgroundColor: 'rgb(55, 60, 63)',
        transition: 'all 0.3s ease-in-out',
        boxSizing: 'border-box',
    },
    mobileOpenLi: {
        display: 'block'
    },
    li: {
        padding: '15px 0 15px 30px',
        '&:hover': {
            color: 'rgba(255, 255, 255, .6)'
        }
    },
    mobileNavHeader: {
        fontSize: '1.8rem',
        letterSpacing: '1px',
        '@media (min-width: 440px)': {
            fontSize: '3.5rem'
        }
    }
};


export default injectSheet(styles)(PSDWebsitesNav);