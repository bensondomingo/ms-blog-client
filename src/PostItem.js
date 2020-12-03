import React from 'react';
import CommentList from './CommentList';
import CommentCreate from './CommentCreate';

import axios from 'axios';

export default class PostItem extends React.Component {
  /* 
    props: {
      post: post object
    }
  */
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  onCommentCreate = (comments) => {
    this.setState({ comments });
  };

  fetchPostComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${this.props.post.id}/comments`
    );
    const comments = res.data;
    this.setState({ comments });
  };

  componentDidMount() {
    this.setState({ comments: [...this.props.post.comments] });
  }

  render() {
    const { post } = this.props;
    return (
      <div className="card" style={{ width: '30%', marginBottom: '20px' }}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={this.state.comments} />
          <CommentCreate
            postId={post.id}
            onCommentCreate={this.onCommentCreate}
          />
        </div>
      </div>
    );
  }
}
