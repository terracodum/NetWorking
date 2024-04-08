import Header from "./components/Header.tsx"
import './App.css'
import Post from "./components/Post.tsx"
import coolAva from "./assets/ip5k_G-4Zh0.jpg";

type Props = {
  userName: string;
}

function App(props: Props) {
  
  return (
    <>
      <Header img={coolAva} userName={props.userName} />
      <div className="postContainer">
        <Post autor={props.userName} title= "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐" text={"1"} date={new Date(2023,7,18)}/>
        <Post autor={props.userName} title= "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐" text={ "ABERTODELSngjkdslkjbgljkabdl aSSFKJ BDKLBGLK K;JJNSNAKJ FKDBB LBA FJKAS KJNFAJK NDJKGB KJLABJK DGDJKN DJNA N ASKN"+ "1"} date={new Date(2023,7,18)}/>
        <Post autor={props.userName} title= "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐" text={ "ABERTODELSngjkdslkjbgljkabdl aSSFKJ BDKLBGLK K;JJNSNAKJ FKDBB LBA FJKAS KJNFAJK NDJKGB KJLABJK DGDJKN DJNA N ASKN"+ "1"} date={new Date(2023,7,18)}/>
        <Post autor={props.userName} title= "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐" text={ "ABERTODELSngjkdslkjbgljkabdl aSSFKJ BDKLBGLK K;JJNSNAKJ FKDBB LBA FJKAS KJNFAJK NDJKGB KJLABJK DGDJKN DJNA N ASKN"+ "1"} date={new Date(2023,7,18)}/>
        <Post autor={props.userName} title= "Artificial Intelligence: The Future Is Here - How AI is Changing the World 🤖🌐" text={ "ABERTODELSngjkdslkjbgljkabdl aSSFKJ BDKLBGLK K;JJNSNAKJ FKDBB LBA FJKAS KJNFAJK NDJKGB KJLABJK DGDJKN DJNA N ASKN"+ "1"} date={new Date(2023,7,18)}/>

      </div>
      <></>
    </>
  )
}


export default App
