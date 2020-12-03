import React from 'react';
import axios from 'axios';

export default class CommentCreate extends React.Component {
  constructor(props) {
    /*
      props: {
        postId: post id
        onCommentCreate: eventHandler
      }
    */
    super(props);
    this.state = { content: '' };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:4001/posts/${this.props.postId}/comments`;
    const res = await axios.post(url, { content: this.state.content });
    this.setState({ content: '' });
    this.props.onCommentCreate(res.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              placeholder="Type your comment"
              type="text"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
              className="form-control"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
