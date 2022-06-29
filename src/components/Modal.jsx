import "./modal.css";

const Modal = ({ id, date, title, content, thumbnail, author, setOpens }) => {
  console.log(id, date, title, content, thumbnail, author);
  return (
    <div className="modal">
      <div className="modalContent">
        <button
          onClick={() => {
            let a = "";
            setOpens(a);
          }}
        >
          Close
        </button>
        <img src={thumbnail?.small} alt="" />

        <h3>{title}</h3>
        <p> {content} </p>

        <div className="bottom">
          <div className="author">
            <p>{author?.name}</p>
            <p>{author?.role}</p>
          </div>
          <p>{new Date(date).toString().substring(4, 16)}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
