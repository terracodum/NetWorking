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
        <h2 className="logo">HardLove.ru</h2>
        <div className="postData">
        </div>
        <div className="userData">
          <p>{props.userName}</p>
          <img className="avatar" src={props.img} alt="userImg"></img>
        </div>
      </header>
    </>
  );
}

export default Header;
