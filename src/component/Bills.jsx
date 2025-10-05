import Form from "./Form";
import Table from "./Table";

export default function Bills() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly gap-3 mt-5">
      <div className="w-100 ">
        <Form />
      </div>
      <div>
        <div className="w-100 ">
          <Table />
        </div>
      </div>
    </div>
  );
}
