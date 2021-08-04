import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postAction";
import PropTypes from "prop-types";
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPost();
  }
  render() {
    const postItem = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div className="posts">
        <h1>Posts</h1>
        <div className="post">{postItem}</div>
      </div>
    );
  }
}

Posts.ProTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(mapStateToProps, { fetchPost })(Posts);
