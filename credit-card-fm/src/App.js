import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import CardContextProvider from "./context/CardContext";

function App() {
  return (
    <CardContextProvider>
      <div className="container">
        <div className="cardContainer">
          <FrontCard />
          <BackCard />
        </div>
        <Form />
      </div>
    </CardContextProvider>
  );
}

export default App;
