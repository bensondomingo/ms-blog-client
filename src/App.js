import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: {} };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');
    this.setState({ posts: res.data });
  };

  onPostCreated = (post) => {
    const posts = { ...this.state.posts };
    posts[post.id] = post;
    this.setState({ posts });
  };

  render() {
    return (
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate onPostCreated={this.onPostCreated} />
        <hr></hr>
        <h1>Posts</h1>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}
