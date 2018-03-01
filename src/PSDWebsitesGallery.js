import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";
import Arrow from './ArrowT';
import Slide from './PSDWebsitesSlide';
import Carousel from 'nuka-carousel';

class PSDWebsitesGallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeSlide: 0,
            slides2: props.slides
        };
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide(){
        const slide = this.state.activeSlide + 1 < this.state.slides2.length ? this.state.activeSlide + 1 : 0;
        this.setState({
            activeSlide: slide
        });
    };

    previousSlide(){
        const slide = this.state.activeSlide - 1 < 0 ? this.state.slides2.length - 1:  this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    };

    render()
    {
        const {classes} = this.props;
        const small = window.matchMedia('(max-width: 640px)').matches;

        return (
            <Fragment>

                <div className={classes.slider}>
                    <Arrow slider='slider' size={true} onClick={this.nextSlide}/>
                    <Carousel dragging={true} slidesToShow={parseFloat(`${small ? 2 : 3 }`)} vertical={small}>
                        {this.state.slides2.map((slide, index) =>
                            <Slide key={index} background={`${small ? slide.background_sm : slide.background }`} text={slide.text}
                                   active={index === this.state.activeSlide} link={slide.link}/>
                        )}
                    </Carousel>
                </div>
            </Fragment>
        )
    }
}

const styles = {
    slider: {
        width: '100vw',
        height: '255vw',
        position: 'relative',
        background: 'rgb(91, 15, 161)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        '@media (min-width: 641px)': {
            display: 'block',
            height: '28vw',
            overflow: 'hidden'
        }
    },
    slidesWrapper: {
        height: '29vw',
        position: 'absolute',
        overflow: 'hidden',
        top: '0',
        right: '0',
        whiteSpace: 'nowrap',
        zIndex: '1',
        transition: 'all .4s ease-in-out'
    },
    active: {
        right: '-33.333vw',
        transition: 'all .4s ease-in-out'
    }
};

PSDWebsitesGallery.propTypes = {
    slides: PropTypes.array.isRequired
};


export default injectSheet(styles)(PSDWebsitesGallery);