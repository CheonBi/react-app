import { Fragment } from "react";
import CoreConcepts from "./components/Concepts/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Concepts/Examples.jsx";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}

export default App;
