import { useContext, useState } from "react";
import { BillContext } from "../context/BillContextProvider";
import useFilter from "../hooks/useFilter";
import Modal from "./Modal";

export default function Table() {
  const { expenseList, setExpenseList, setFormData, setEditId } =
    useContext(BillContext);
  const [sorting, setSorting] = useState(() => () => {});
  const [data, searchQuery] = useFilter(expenseList, (item) => {
    return item.category;
  });

  const deleteEntry = (id) => {
    const updatedList = expenseList.filter((item) => item.id != id);
    setExpenseList(updatedList);
  };
  const editEntry = (id) => {
    const { title, category, price } = expenseList.find(
      (item) => item.id == id
    );
    setFormData({ title, category, price });
    setEditId(id);
  };
  return (
    <>
      <div className="stats bg-base-100 border-base-300 border w-[100%] mt-6">
        <div className="stat">
          <div className="stat-title">Total Item</div>
          <div className="stat-value">{data.length}</div>
          <div className="stat-actions"></div>
        </div>

        <div className="stat">
          <div className="stat-title">Total expense </div>
          <div className="stat-value">
            {data.reduce((acc, curr) => {
              return acc + parseInt(curr.price);
            }, 0)}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>
                Title
                <button
                  className="btn btn-xs btn-ghost btn-circle p-[3px]"
                  onClick={() =>
                    setSorting(() => (a, b) => {
                      return a.title.localeCompare(b.title);
                    })
                  }
                >
                  <i class="material-symbols-outlined ">arrow_downward_alt</i>
                </button>
                <button
                  className="btn btn-xs btn-ghost btn-circle p-[3px]"
                  onClick={() =>
                    setSorting(() => (a, b) => {
                      return b.title.localeCompare(a.title);
                    })
                  }
                >
                  <i class="material-symbols-outlined p-0">arrow_upward_alt</i>
                </button>
              </th>
              <th>
                <div className="dropdown dropdown-center p-0">
                  <div tabIndex={0} role="button" className="btn btn-ghost p-0">
                    Categories
                    <span class="material-symbols-outlined">
                      arrow_drop_down
                    </span>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li onClick={() => searchQuery("")}>
                      <a>No Filter</a>
                    </li>
                    <li onClick={() => searchQuery("Clothes")}>
                      <a>Clothes</a>
                    </li>
                    <li onClick={() => searchQuery("Grocery")}>
                      <a>Grocery</a>
                    </li>
                    <li onClick={() => searchQuery("Electronics")}>
                      <a>Electronics</a>
                    </li>
                    <li onClick={() => searchQuery("Bills")}>
                      <a>Bills</a>
                    </li>
                  </ul>
                </div>
              </th>
              <th>
                Price
                <button
                  className="btn btn-xs btn-ghost btn-circle p-[3px]"
                  onClick={() =>
                    setSorting(() => (a, b) => {
                      return parseInt(b.price) - parseInt(a.price);
                    })
                  }
                >
                  <i class="material-symbols-outlined ">arrow_downward_alt</i>
                </button>
                <button className="btn btn-xs btn-ghost btn-circle p-[3px]">
                  <i
                    class="material-symbols-outlined p-0"
                    onClick={() =>
                      setSorting(() => (a, b) => {
                        return parseInt(a.price) - parseInt(b.price);
                      })
                    }
                  >
                    arrow_upward_alt
                  </i>
                </button>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a, b) => sorting(a, b))
              .map(({ title, category, price, id }) => {
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>
                      <button
                        className="btn btn-circle btn-secondary btn-sm p-1 m-1"
                        onClick={() => editEntry(id)}
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        className="btn btn-circle btn-error btn-sm p-1 m-1"
                        onClick={() => deleteEntry(id)}
                      >
                        <span class="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
