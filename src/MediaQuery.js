import React from 'react';

class MediaQuery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            query: this.props.query ? this.props.query : '(min-width: 760px)',
            queryMatches: false,
        }
    }

    /* Control Media Query */
    updateMatches () {
        this.setState({queryMatches: this.mediaQuery.matches});
    }
    componentWillMount() {
        this.mediaQuery = window.matchMedia(this.state.query);
        this.mediaQuery.addListener(this.updateMatches.bind(this));
        this.updateMatches();
    }
    componentWillUnmount() {
        this.mediaQuery.removeListener(this.updateMatches)
    }

    render(){
        return(
            <div>
                {this.state.queryMatches ? this.props.children : null}
            </div>
        );
    }
}

export default MediaQuery;