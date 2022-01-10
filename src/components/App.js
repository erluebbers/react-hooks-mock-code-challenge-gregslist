import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001")
      .then(r => r.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
