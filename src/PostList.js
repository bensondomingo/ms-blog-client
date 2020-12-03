// import React, { useState, useEffect } from 'react';
import React from 'react';
import PostItem from './PostItem';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { posts } = this.props;
    const renderedPosts = Object.values(posts).map((post) => (
      <PostItem post={post} key={post.id} />
    ));

    return (
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
      </div>
    );
  }
}
