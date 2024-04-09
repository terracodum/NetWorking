import "./Post.css";

interface IPost {
  author: string;
  title: string;
  text: string;
  date: Date;
}

function Post(props: IPost) {
  return (
    <div className="post">
      <h3 className="postTitle">{props.title}</h3>
      <h4 className="postAutor">{props.author}</h4>
      <p className="postText">{props.text}</p>
      <p className="postDate">{props.date.toDateString()}</p>
    </div>
  );
}

export default Post;
