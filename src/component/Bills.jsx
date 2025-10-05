import Form from "./Form";
import Table from "./Table";

export default function Bills() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly gap-2 px-5  mt-5">
      <div className="w-100 flex-1">
        <Form />
      </div>
      <div className="flex-2">
        <div className="w-[90%]">
          <Table />
        </div>
      </div>
    </div>
  );
}
