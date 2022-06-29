import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import Modal from "./components/Modal";
function App() {
  const [post, setPost] = useState([]);
  let list = [];
  const [setOpen, setOpens] = useState("");
  const apiGet = async () => {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    );
    setPost(data);
  };
  useEffect(() => {
    apiGet();
  }, []);
  const openM = post.find((post) => post.id === parseInt(setOpen));

  return (
    <div className="App">
      {openM ? (
        <Modal
          date={openM?.date}
          title={openM?.title}
          content={openM?.content}
          thumbnail={openM?.thumbnail}
          author={openM?.author}
          id={openM?.id}
          setOpens={setOpens}
        />
      ) : (
        ""
      )}
      {post?.map((p, i) => {
        return (
          <Card
            date={p.date}
            title={p.title}
            content={p.content}
            thumbnail={p.thumbnail}
            author={p.author}
            id={p.id}
            setOpen={setOpens}
          />
        );
      })}
    </div>
  );
}

export default App;
