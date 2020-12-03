// import React, { useState } from 'react';
import React from 'react';
import axios from 'axios';

export default class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/posts', {
      title: this.state.title,
    });
    // Clear title after submit
    this.setState({ title: '' });

    // Add comments array
    res.data.comments = [];
    this.props.onPostCreated(res.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
