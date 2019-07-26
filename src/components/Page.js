import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';

import {newLike} from '../actions/pageActions';

class Page extends Component {
    render() {
        const {dispatch} = this.props;

        return (
            <Fragment>
                <h1>Page</h1>
                <input type="button"
                onClick={() => dispatch(newLike())}
                value='More redux likes'/>
            </Fragment>
        )
    }
}

/*function mapStateToProps(state) {
    return state;
}*/

export default connect()(Page);
