import { useState } from "react";
import "./Header.css";

type Props = {
    img: any;
    userName: string;
};


function Header(props: Props) {
    const [postQuantity, setPostQuantity] = useState(0);
    return (
        <>
        <header className="header">
            <h2 className="logo">NikitaHarlov.ru</h2>
            <div className="postData">
                <button onClick={() => { setPostQuantity(postQuantity + 1)} } id="newPost"> New post </button>
                <p>Quantity of post: {postQuantity}</p>
            </div>
            <div className="userData">
                <p>{props.userName}</p>
                <img className="avatar" src={props.img} alt="userImg"></img>
            </div>
        </header>
        </>
    );
}

export default Header