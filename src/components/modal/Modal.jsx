import "../../styles/modal/Modal.scss";
import ModalItem from "./ModalItem";

const Modal = ({ data, onClose }) => {
  return (
    <>
      <div className="modal-back" onClick={onClose} >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}></button>
          <div className="modal-content">
            {data?.map((item, idx) => (
              <ModalItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Modal;