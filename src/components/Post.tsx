import "./Post.css"

type Props = {
    autor: string,
    title: string;
    text: any;
    date: Date;
}

function Post(props : Props) {
    return (
        <div className="post">
            <h3 className="postTitle">{props.title}</h3>
            <h4 className="postAutor">{props.autor}</h4>
            <p className="postText">{props.text}</p>
            <p className="postDate">{props.date.toDateString()}</p>
        </div>
    );
}

export default Post