import React from 'react';

export default class CommentList extends React.Component {
  /*
    props: {
      comments: comment object
    }
   */

  commentContent = (comment) => {
    if (comment.status === 'APPROVED') return comment.content;
    else if (comment.status === 'REJECTED')
      return 'Your comment was rejected by the moderator';
    else return 'Your comment is waiting for approval';
  };

  render() {
    const { comments } = this.props;
    const renderedComments = comments.map((comment) => (
      <li key={comment.id}>{this.commentContent(comment)}</li>
    ));
    return (
      <div>
        <ul>{renderedComments}</ul>
      </div>
    );
  }
}
