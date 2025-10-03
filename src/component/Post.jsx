import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { setCount } = useOutletContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
      });
  }, [id]);

  return (
    <div className="p-4">
      <button
        className="btn btn-primary btn-dash ps-1"
        onClick={() => navigate(-1)}
      >
        <svg
          className="h-6 w-6 fill-primary md:h-8 md:w-8 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
        </svg>
        Go Back
      </button>
      <div className="hero bg-indigo-800 min-h-50 mt-2  rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">{postData?.title}</h1>
            <p className="py-6">{postData?.body}</p>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
      {location.state?.commentId && (
        <p className="text-center text-primary">
          Post for Comment: <b>{location.state.commentId}</b>
        </p>
      )}
      <div className="flex flex-row flex-wrap justify-evenly gap-3 bg-base-200"></div>
    </div>
  );
}
