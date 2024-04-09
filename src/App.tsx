import { useState } from 'react';
import Header from "./components/Header.tsx";
import "./App.css";
import Post from "./components/Post.tsx";
import coolAva from "./assets/ip5k_G-4Zh0.jpg";

type Props = {
  userName: string;
};

function App(props: Props) {
  const testPost = {
    author: props.userName,
    title: "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐",
    text: "ABERTODELSngjkdslkjbgljkabdl aSSFKJ BDKLBGLK K;JJNSNAKJ FKDBB LBA FJKAS KJNFAJK NDJKGB KJLABJK DGDJKN DJNA N ASKN",
    date: new Date(2023, 7, 18),
  }

  const [posts, setPosts] = useState([testPost]);
  
  function addPost() {
    setPosts([...posts, testPost])
  }

  return (
    <>
      <Header img={coolAva} userName={props.userName} />

      <button onClick={addPost} >
        Add post
      </button>

      <div className="postContainer">
        {posts.map((post) => {
          return (
            <Post author={post.author} title={post.title} text={post.text} date={post.date} />
          );
        })}
      </div>
      <></>
    </>
  );
}

export default App;
