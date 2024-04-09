import { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Post from "./components/Post.tsx";
import coolAva from "./assets/ip5k_G-4Zh0.jpg";

type Props = {
  userName: string;
};

interface IPost {
  author: string;
  title: string;
  text: string;
  date: Date;
}

function App(props: Props) {
  const testPost = {
    author: props.userName,
    title:
      "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐",
    text: "ABERTODELSngjkdslkjbgljkabdl aSSFKJ BDKLBGLK K;JJNSNAKJ FKDBB LBA FJKAS KJNFAJK NDJKGB KJLABJK DGDJKN DJNA N ASKN",
    date: new Date(2023, 7, 18),
  };

  const [posts, setPosts] = useState([testPost]);
  const [isOpen, setIsOpen] = useState(false);

  // States for inputs in the popup form
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function openPopup() {
    setIsOpen(true);
  }

  function addPost() {
    // Formulating the post
    const post = {
      author: props.userName,
      title: title,
      text: text,
      date: new Date(),
    };

    setPosts([...posts, post]);
    // Reseting the states
    setTitle("");
    setText("");
    // Closing the popup (it rerenders automatically)
    setIsOpen(false);
  }

  return (
    <>
      <Header img={coolAva} userName={props.userName} />

      <button onClick={openPopup}>Add post</button>

      <div className="postContainer">
        {/*
          Выводим ВСЕ посты, которые находятся в переменной `post`, 
          поскольку это стэйт, при добавлении туда элементов через setPosts
          компонент ререндерится
        */}
        {posts.map((post: IPost) => {
          return (
            <Post
              author={post.author}
              title={post.title}
              text={post.text}
              date={post.date}
            />
          );
        })}
      </div>

      {/*
        Наш попап, объяснения стилей в файле App.css
      */}
      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <div className="popup-header">
              <button onClick={addPost} className="add-post-btn">
                Add post
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="close-popup-btn"
              >
                Close
              </button>
            </div>

            <div className="popup-body">
              {/*
                `e.preventDefault()` doesn't allow the page to reload on submit
              */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-field">
                  <label htmlFor="title">Title:</label>
                  <input
                    id="title"
                    type="text"
                    // Dynamically change the state on input change
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="text">Text:</label>
                  <input
                    id="text"
                    type="text"
                    // Dynamically change the state on input change
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
