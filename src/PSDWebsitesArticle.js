import React, {Fragment}  from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";

function PSDWebsitesArticle({classes, page, paragraph, paragraph2}) {
    const small = window.matchMedia('(max-width: 640px)').matches;

    return (
        <article className={classes.article}>
            <section className={classes.section}>
                <h2 className={classes.section__title}>{page}</h2>
                <div className={classes.section__content}>
                    <p className={classes.section__p}>{paragraph}</p>
                    <p className={classes.section__p}>{paragraph2}</p>
                    {small ? null :
                        (<Fragment> <p className={classes.section__p}>{paragraph}</p><p className={classes.section__p}>{paragraph2}</p></Fragment>)}
                </div>
            </section>
        </article>
    );
}

const styles = {
    article: {
        background: 'rgb(235, 235, 235)',
        paddingLeft: '10vw',
        paddingRight: '8vw',
        boxSizing: 'border-box',
        '@media (min-width: 640px)': {
            paddingLeft: '8vw',
            paddingRight: '8vw',
        },
    },
    section: {
        margin: 'auto',
        padding: "30px 0 0",
        textAlign: 'left',
        '@media (min-width: 440px)': {
            padding: "70px 0 60px",
        },
        '@media (min-width: 640px)': {
            padding: "70px 0 100px",
        },

    },
    section__title: {
        paddingBottom: '30px',
        color: 'rgb(8, 140, 165)',
        fontSize: '3rem',
        fontWeight: '400',
        '@media (min-width: 440px)': {
            fontSize: '4.7rem',
        },
    },
    section__content: {
        columnCount: '1',
        '@media (min-width: 640px)': {
            columnCount: '2',
            columnGap: '55px',
        }
    },
    section__p: {
        margin: '0 0 45px',
        color: 'rgb(81, 81, 81)',
        fontSize: '2.2rem',
        lineHeight: '21px',
        '@media (min-width: 440px)': {
            lineHeight: '40px',
            fontSize: '3.5rem',
        },
        '@media (min-width: 800px)': {
            lineHeight: '25px',
            fontSize: '2rem',
        },
        '@media (min-width: 1100px)': {
            lineHeight: '80px',
        },
        '@media (min-width: 1800px)': {
            lineHeight: '100px',
        }

    }
};

PSDWebsitesArticle.propTypes = {
    page: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired
};


export default injectSheet(styles)(PSDWebsitesArticle);