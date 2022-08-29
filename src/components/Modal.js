import React from "react";
import { useDispatch } from "react-redux";
import { setClose } from "../redux/modalFeatures";
import { clearCart } from "../redux/features";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <button
          className="btn confirm-btn"
          type="button"
          onClick={() => {
            dispatch(clearCart());
            dispatch(setClose());
          }}
        >
          confirm
        </button>
        <button
          className="btn clear-btn"
          type="button"
          onClick={() => dispatch(setClose())}
        >
          cancel
        </button>
      </div>
    </aside>
  );
};

export default Modal;
