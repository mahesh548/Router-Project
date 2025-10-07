import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  const [count, setCount] = useState(1);

  console.log(count); // example use of outletContext
  return (
    <>
      <ul className="flex flex-row items-center justify-center gap-5 bg-base-200 px-8 py-3 rounded-box fixed bottom-[10px] left-1/2 -translate-x-1/2 z-10 border-1 ">
        <li className="flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "btn-outline" : ""} flex gap-1 btn`
            }
          >
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <polyline
                  points="1 11 12 2 23 11"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></polyline>
                <path
                  d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></path>
                <line
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="18"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></line>
              </g>
            </svg>
            <span className="dock-label">Post</span>
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/comments"
            className={({ isActive }) =>
              `${isActive ? "btn-outline" : ""} flex gap-1 btn`
            }
          >
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <polyline
                  points="3 14 9 14 9 17 15 17 15 14 21 14"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></polyline>
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></rect>
              </g>
            </svg>
            <span className="dock-label">Comments</span>
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/bills"
            className={({ isActive }) =>
              `${isActive ? "btn-outline" : ""} flex gap-1 btn`
            }
          >
            <span class="material-symbols-outlined">currency_rupee_circle</span>
            <span className="dock-label">Expense</span>
          </NavLink>
        </li>
        <li className="flex">
          <NavLink
            to="/counter"
            className={({ isActive }) =>
              `${isActive ? "btn-outline" : ""} flex gap-1 btn`
            }
          >
            <span class="material-symbols-outlined">timer_10_alt_1</span>
            <span className="dock-label">Counter</span>
          </NavLink>
        </li>
      </ul>

      <Outlet context={{ setCount }} />
    </>
  );
}
