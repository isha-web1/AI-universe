import { useEffect, useState } from "react";
import "./App.css";
import Button from "./component/Button/Button";
import Card from "./component/Card/Card";
import Header from "./component/Header/Header";

function App() {
  
  return (
    <>
      <Header></Header>
      <Button>Sort by date</Button>
      <Card ></Card>
      
    </>
  );
}

export default App;
