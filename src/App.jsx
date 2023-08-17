import "./App.css";
import Button from "./component/Button/Button";
import Card from "./component/Card/Card";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Button>Sort by date</Button>
      <Card></Card>
      <Button>see more</Button>
    </>
  );
}

export default App;
