import React from "react";
import "../App.css";
import Modal from "./Modal";
export default function Card({
  id,
  date,
  title,
  content,
  thumbnail,
  author,
  setOpen,
}) {
  return (
    <div className="card">
      <img src={thumbnail?.small} alt="" />
      <div className="content">
        <div className="logo"></div>
        <h3
          onClick={() => {
            setOpen(id);
          }}
        >
          {title}
        </h3>
        <p> {content?.substring(0, 150)} ..</p>
      </div>
      <div className="bottom">
        <div className="author">
          <p>{author?.name}</p>
          <p>{author?.role}</p>
        </div>
        <p>{new Date(date).toString().substring(4, 16)}</p>
      </div>
    </div>
  );
}
