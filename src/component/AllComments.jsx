import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AllComments() {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) => {
      res.json().then((data) => {
        setComments(
          data.map(({ id, name, body, email, postId }) => {
            return (
              <div
                className="card w-96 card-border bg-base-100 card-xs shadow-sm"
                key={id}
              >
                <div className="card-body p-4">
                  <h2 className="card-title">{name}</h2>
                  <div className="badge badge-info">{email}</div>
                  <p>{body}</p>
                  <div className="justify-end card-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/post/" + postId)}
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
            <h1 className="text-5xl font-bold">All Commets</h1>
            <p className="py-6">View all {comments.length} comments.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly gap-3 bg-base-200">
        {comments}
      </div>
    </div>
  );
}
