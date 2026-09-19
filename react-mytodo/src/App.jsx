import { useState } from "react";
import Header from "./components/Header";
import { IconA, IconB } from "./components/Icon";
import Checkbox from "./components/Checkbox";
import Image from "./components/Image";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [count, setCount] = useState(0);

  const todoList = [
    {
      text: "Hee",
      isChecked: false,
    },
    {
      text: "kuy",
      isChecked: false,
    },
    {
      text: "Yed",
      isChecked: true,
    },
  ];

  let [counter, setCounter] = useState(0);
  let [playing,setPlaying] =useState(false);

  function trigerbutton(){
    setPlaying(!playing);
  }
  return (
    <>
      <Header />
      <IconA />
      <IconB />
      <br />
      <Image imageUrl="https://picsum.photos/200/300" />
      <h1>hlo</h1>
      <br />
      <br />
      <p>help me</p>
      {todoList.map((todo, index) => {
        return (
          <Checkbox key={index} text={todo.text} isChecked={todo.isChecked} />
        );
      })}

      {counter}

      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <Video src="https://lorem.video/720p" isPlaying={playing} />
      <button onClick={trigerbutton} >Play</button>
      <h1>TODO-LIST</h1>
    </>
  );
}

export default App;
