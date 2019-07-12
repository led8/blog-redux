import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Call actions //
import { fetchPost } from '../actions/index';

class PostShow extends Component {
  componentWillMount() {
    if (!this.props.post) {
      this.props.fetchPost(this.props.match.params.id)
    }
  }

  render() {
    if (!this.props.post) {
      return (
        <p>Loading...</p>
      );
    }

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

function mapStateToProps(state, ownProps) {
  const postIdFromUrl = parseInt(ownProps.match.params.id, 10);
  const post = state.posts.find(p => p.id === postIdFromUrl);
  return { post }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);



