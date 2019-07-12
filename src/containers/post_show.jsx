import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Call actions //
import { fetchPost } from '../actions';

class PostShow extends Component {
  componentDidMount() {
    // console.log(this.props.fetchPost(this.props.match.params.id))

    this.props.fetchPost(this.props);
  }

  render() {
    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    )
  }
}

function mapStateToProps(reduxState, param) {
  const postIdFromUrl = parseInt(param.match.params.id, 10);
  const post = reduxState.posts.find(post => post.id === postIdFromUrl);
  return { post }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (PostShow);



