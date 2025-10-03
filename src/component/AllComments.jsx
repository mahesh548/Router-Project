import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AllComments() {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [data, setData] = useState([]);
  const [param, setParam] = useSearchParams();
  const postId = param.get("postId");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) => {
      res.json().then((data) => {
        setData(data);
      });
    });
  }, []);

  useEffect(() => {
    if (!data) return;
    let filterData = data.filter(({ postId: userPostId }) => {
      return postId == userPostId;
    });
    if (!postId) filterData = data;
    setComments(
      filterData.map(({ id, name, body, email, postId }) => {
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
                  onClick={() =>
                    navigate("/post/" + postId, { state: { commentId: id } })
                  }
                >
                  Open post
                </button>
              </div>
            </div>
          </div>
        );
      })
    );
  }, [postId, data]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-50">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">All Commets</h1>
            <p className="py-6">All {comments.length} comments.</p>
            <label className="input input-primary">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                placeholder="Search Post Id."
                onChange={(e) => {
                  setParam({ postId: e.target.value });
                  if (!e.target.value) setParam({});
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly gap-3 bg-base-200">
        {comments}
      </div>
    </div>
  );
}
