import TabButton from "../Button/TabButton.jsx";
import Tabs from "../Button/Tabs.jsx";
import Section from "../Concepts/Section.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";


export default function Examples(){
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
    <Section title="Examples" id="examples" className="examples">
      <Tabs buttons={
        <>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>State</TabButton>
          </menu>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  )
}