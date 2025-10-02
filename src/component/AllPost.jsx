import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPost() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
      data.json().then((posts) => {
        setPosts(
          posts.map(({ id, title, body, userId }) => {
            return (
              <div
                className="card w-96 card-border bg-base-100 card-xs shadow-sm"
                key={id}
              >
                <div className="card-body p-4">
                  <h2 className="card-title">{title}</h2>
                  <p>{body}</p>
                  <div className="justify-end card-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/post/" + id)}
                    >
                      Open post
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        );
      });
    });
  }, []);
  return (
    <div>
      <div className="hero bg-base-200 min-h-50">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">All Posts</h1>
            <p className="py-6">View all {posts.length} posts.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly gap-3 bg-base-200">
        {posts}
      </div>
    </div>
  );
}
