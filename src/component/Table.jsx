import { useContext } from "react";
import { BillContext } from "../context/BillContextProvider";

export default function Table() {
  const { expenseList } = useContext(BillContext);
  return (
    <>
      <div className="stats bg-base-100 border-base-300 border w-100 mt-6">
        <div className="stat">
          <div className="stat-title">Total Item</div>
          <div className="stat-value">{expenseList.length}</div>
          <div className="stat-actions"></div>
        </div>

        <div className="stat">
          <div className="stat-title">Total expense </div>
          <div className="stat-value">
            {expenseList.reduce((acc, curr) => {
              return acc + parseInt(curr.price);
            }, 0)}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Categories</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {expenseList.map(({ serial, title, category, price, id }) => {
              return (
                <tr key={id}>
                  <th>{serial}</th>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
