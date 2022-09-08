import "./App.css";
import CustomButton from "./components/CustomButton";
function App() {
  return (
    <div className="App">
      <CustomButton type="submit">I am Black</CustomButton>
      <CustomButton isGoogleSignIn>I am Blue</CustomButton>
    </div>
  );
}

export default App;
