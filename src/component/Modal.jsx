import { createPortal } from "react-dom";

export default function Modal({ isOpen, setOpen, content }) {
  return createPortal(
    <>
      <dialog id="my_modal_1" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Dear User</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error" onClick={() => setOpen(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById("portal")
  );
}
