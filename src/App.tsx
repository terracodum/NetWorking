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
  id: string;
}

function App(props: Props) {
  const testPost = {
    author: props.userName,
    title:
      "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐",
    text: "ABERTODELSngjkdslkjbgljkabdl aSSFKJ BDKLBGLK K;JJNSNAKJ FKDBB LBA FJKAS KJNFAJK NDJKGB KJLABJK DGDJKN DJNA N ASKN",
    date: new Date(2023, 7, 18),
    id: new Date(2023, 7, 18).getTime().toString()
  };

  const [posts, setPosts] = useState([testPost]);
  const [isOpen, setIsOpen] = useState(false);

  // States for inputs in the popup form
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function openPopup() {
    setIsOpen(true);
  }
  function deletePost(id: string) {
    setPosts(posts.filter((post) => post.id !== id));

  }
  function addPost() {
    // Formulating the post
    const post = {
      author: props.userName,
      title: title,
      text: text,
      date: new Date(),
      id: Date.now.toString()
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
      <h4>Count of posts: {posts.length}</h4>

      <button onClick={openPopup} id="newPost">Add post</button>

      <div className="postContainer">
        {/*
          Выводим ВСЕ посты, которые находятся в переменной `post`, 
          поскольку это стэйт, при добавлении туда элементов через setPosts
          компонент ререндерится
        */}
        {posts.map((post: IPost) => {
          return (
            <>
            <Post
              author={post.author}
              title={post.title}
              text={post.text}
              date={post.date}
              id={post.id}
            />
            <button className="newPost" onClick={() => {deletePost(post.id)}}>Delete</button>
            </>
          );
        })}
      </div>
      {/*
        Наш попап, объяснения стилей в файле App.css
      */}

      {isOpen && (
        <div className="overlay">
          <div className="popup">

            <div className="popup-body">
              {/*
                `e.preventDefault()` doesn't allow the page to reload on submit
              */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h4>Add new post</h4>
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
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
