import React, { Component, useState, useEffect, forwardRef } from "react";
import "./Task25.css";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data.slice(0, 5), loading: false }))
      .catch((err) => console.error(err));
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <div className="card-container">
        <h2>Class-based: First 5 Posts</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <b>{post.title}</b>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function SinglePost() {
  const [post, setPost] = useState(null);

  // Ref example
  const postRef = React.useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, []);

  const withBorder = (WrappedComponent) => (props) =>
    (
      <div className="with-border">
        <WrappedComponent {...props} />
      </div>
    );

  const PostContent = () => (
    <>
      {post && (
        <div ref={postRef}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );

  const PostWithBorder = withBorder(PostContent);

  return (
    <div className="card-container">
      <h2>Function-based: Single Post</h2>
      {post ? <PostWithBorder /> : <p>Loading...</p>}
    </div>
  );
}

function Task25() {
  return (
    <>
      <PostsList />
      <SinglePost />
    </>
  );
}

export default Task25;
