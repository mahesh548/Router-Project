import { useContext, useState } from "react";
import InputField from "./InputField";
import { BillContext } from "../context/BillContextProvider";
import Validate from "../Utility/Validate";

const formRules = {
  title: { minL: 2, maxL: 50 },
  price: { minL: 1, type: "number" },
  category: { minL: 1 },
};

export default function Form() {
  const { formData, setFormData, setExpenseList, editId, setEditId } =
    useContext(BillContext);

  // to show error messages
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    // clear error message if there any
    if (Object.keys(errors).length) {
      setErrors({});
    }
    // update form data
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleForm = (e) => {
    // preventing reload
    e.preventDefault();

    const errors = Validate(formData, formRules); // form validation
    if (Object.keys(errors).length) {
      // if invalid input show error and return
      setErrors(errors);
      return;
    }

    if (editId) {
      setExpenseList((prev) => {
        let newPrev = prev.map((item) => {
          if (item.id != editId) return item;
          return { ...item, ...formData };
        });
        return newPrev;
      });
      setEditId("");
      setFormData({ title: "", category: "", price: "" });
      return;
    }

    // update expense list
    setExpenseList((prev) => {
      return [
        ...prev,
        { ...formData, serial: prev.length + 1, id: crypto.randomUUID() },
      ];
    });

    // reset form
    setFormData({ title: "", category: "", price: "" });
  };

  return (
    <form onSubmit={handleForm}>
      <InputField
        value={formData.title}
        onChange={handleInput}
        label={"Title"}
        name={"title"}
        placeholder={"Enter product title"}
        error={errors?.title}
      />
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Select Category</legend>
        <select
          className="select w-100"
          name="category"
          onChange={handleInput}
          value={formData.category}
        >
          <option hidden>Product Categories</option>
          <option>Clothes</option>
          <option>Grocery</option>
          <option>Electronics</option>
          <option>Bills</option>
        </select>
        {errors?.category && <span className="label">{errors?.category}</span>}
      </fieldset>
      <InputField
        value={formData.price}
        onChange={handleInput}
        label={"Price"}
        name={"price"}
        placeholder={"Enter price in rupees"}
        error={errors?.price}
      />
      <button className="btn w-100 btn-primary mt-3">
        {editId ? "Save Edits" : "Add new expense"}
      </button>
    </form>
  );
}
