export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "modal"} className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          <h2>{footer ? footer : "Footer"}</h2>
        </div>
      </div>
    </div>
  );
}
