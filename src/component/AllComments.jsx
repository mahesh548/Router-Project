import { useEffect, useState } from "react";

export default function AllComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) => {
      res.json().then((data) => {
        setComments(
          data.map(({ id, title, body, userId }) => {
            return (
              <div
                className="card w-96 card-border bg-base-100 card-xs shadow-sm"
                key={id}
              >
                <div className="card-body p-4">
                  <h2 className="card-title">{title}</h2>
                  <p>{body}</p>
                  <div className="justify-end card-actions">
                    <button className="btn btn-primary">Open post</button>
                  </div>
                </div>
              </div>
            );
          })
        );
      });
    });
  }, []);
  return <></>;
}
