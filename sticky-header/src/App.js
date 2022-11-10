import { useEffect, useState } from "react";
import "./App.css";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import FixedHeader from "./FixedHeader";

function App() {
  const [fixedHeader, setFixedHeader] = useState(false);

  const showFixedHeader = () => {
    if (window.scrollY >= 66) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  useEffect(() => {
    showFixedHeader();
    window.addEventListener("scroll", showFixedHeader);
    return () => {
      window.removeEventListener("scroll", showFixedHeader);
    };
  });

  return (
    <div className="App">
      <FixedHeader fixedHeader={fixedHeader} />
      <BannerOne />
      <BannerTwo />
    </div>
  );
}

export default App;
