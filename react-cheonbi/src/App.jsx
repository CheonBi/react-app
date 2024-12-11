import { useState } from 'react'
import "./styles.css"
import reactLogo from './assets/react.svg'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

const content = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)"
    ],
    [
        "Vanilla JavaScript requires imperative programming",
        "Imperative Programming: You define all the steps needed to achieve a result",
        "React on the other hand embraces declarative programming",
        "With React, you define the goal and React figures out how to get there"
    ]
];

function Header(){
    const description = reactDescriptions[genRandomInt(2)];
    return  (
        <header className="App-header">
            <h1 className="App-header__title">React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are going to build</p>
        </header>
    );
}

function App() {
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    return (
        <div>
            <header>
                <img src={reactLogo} alt="React logo" />

                <div>
                    <h1>React.js</h1>
                    <p>i.e., using the React library for rendering the UI</p>
                </div>
            </header>
            <Header/>

            <div id="tabs">
                <menu>
                    <button
                        className={activeContentIndex === 0 ? "active" : ""}
                        onClick={() => setActiveContentIndex(0)}
                    >
                        Why React?
                    </button>
                    <button
                        className={activeContentIndex === 1 ? "active" : ""}
                        onClick={() => setActiveContentIndex(1)}
                    >
                        Core Features
                    </button>
                    <button
                        className={activeContentIndex === 2 ? "active" : ""}
                        onClick={() => setActiveContentIndex(2)}
                    >
                        Related Resources
                    </button>
                    <button
                        className={activeContentIndex === 3 ? "active" : ""}
                        onClick={() => setActiveContentIndex(3)}
                    >
                        React vs JS
                    </button>
                </menu>
                <div id="tab-content">
                    <ul>
                        {content[activeContentIndex].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App
