import { useState } from "react";
import { CORE_CONCEPTS } from "./components/Concepts/data.js";
import { EXAMPLES } from "./components/Concepts/data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/Concepts/CoreConcepts.jsx";
import TabButton from "./components/Button/TabButton.jsx";
import "./index.css";

function App() {
  let tabContent = "Click tabs";
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
          {/*{!selectedTopic ? (<p>Please select a topic</p>) : (*/}
          {/*    <div id="tab-content">*/}
          {/*        <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
          {/*        <p>{EXAMPLES[selectedTopic].description}</p>*/}
          {/*        <pre>*/}
          {/*            <code>{EXAMPLES[selectedTopic].code}</code>*/}
          {/*        </pre>*/}
          {/*    </div>*/}
          {/*)}*/}
        </section>
      </main>
    </div>
  );
}

export default App;
