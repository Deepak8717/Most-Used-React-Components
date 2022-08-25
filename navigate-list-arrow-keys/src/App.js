import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const data = ["item 1", "item 2", "item 3", "item 4"];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState();
  const keyPressHandler = (e) => {
    const length = data.length;
    //downArrow key
    if (e.keyCode === 40) {
      setIndex(index + 1);
      if (index >= length - 1) {
        setIndex(0);
      }
    }

    //upArrow Key
    if (e.keyCode === 38) {
      setIndex(index - 1);
      if (index <= 0) {
        setIndex(length - 1);
      }
      setSelected(data[index]);
    }
  };
  useEffect(() => {
    setSelected(data[index]);
  }, [index]);

  const clickHandler = (i) => {
    setIndex(i);
  };

  return (
    <div className="App" tabIndex={0} onKeyDown={keyPressHandler}>
      <p>use up down keys and hit enter to select, or use the mouse</p>
      <span>Selected: {selected}</span>
      <ul>
        {data.map((item, i) => {
          return (
            <li
              key={i}
              className={`${index === i ? "selected" : ""}`}
              onClick={() => clickHandler(i)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
