import React from 'react';

import { Link, hashHistory } from 'react-router';

// import { connect } from "react-redux";
// import { getMovieDetail } from '../actions';
// 
// const mapStateToProps = state => {
//     return { item: state.item };
// };
// 
// const mapDispatchToProps = dispatch => {
//     return {
//         getMovieDetail: payload => dispatch(getMovieDetail(payload))
//     };
// }

class MyContent extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                My Content
            </div>
        );
    }
}

// const MyContent = connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
export default MyComponent;
