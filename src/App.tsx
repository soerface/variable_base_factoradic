import {useEffect, useState} from 'react'
import './App.css'
import {toFactoradic} from "variable-base-factoradic";
import Wheel from "./Wheel.tsx";



const installInstructions = {
    python: <>
        <pre>pip install variable-base-factoradic</pre>
        <small style={{textAlign: "right", display: "block"}}><a href={"https://pypi.org/project/variable-base-factoradic/"} target="_blank">PyPI</a></small>
    </>,
    javascript: <>
        <pre>npm install variable-base-factoradic</pre>
        <small style={{textAlign: "right", display: "block"}}><a href={"https://www.npmjs.com/package/variable-base-factoradic"} target="_blank">npm</a></small>
    </>
}

type InstallInstructions = keyof typeof installInstructions

function App() {
    const [count, setCount] = useState(parseInt(localStorage.getItem("count") || "0"))
    const [selectedInstructions, setSelectedInstructions] = useState<InstallInstructions>("python");

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)
        return () => clearInterval(interval)
    });

    let factoradic = "0";

    try {
        factoradic = toFactoradic(count)
    } catch (e) {
        setCount(0)
    }
    localStorage.setItem("count", count.toString())

    const numWheels = 9
    const longestWheel = numWheels + 1
    const wheels = [...Array(numWheels).keys()].map((i) => {
        const elements = [...Array(longestWheel - i).keys()].map((j) => (j).toString(longestWheel))
        const idx = parseInt(factoradic[factoradic.length - numWheels + i]);
        return <Wheel key={i} elements={elements} currentIndex={idx || 0} longestWheel={longestWheel}/>
    });

    return (
        <>
            {/*<button onClick={() => setCount(count + fromFactoradic("10000000"))}>++</button>*/}
            {/*<button onClick={() => setCount(count + 5)}>+</button>*/}
            {/*<button onClick={() => setCount(count - 5)}>-</button>*/}
            {/*<button onClick={() => setCount(count - fromFactoradic("10000000"))}>--</button>*/}
            <p style={{opacity: count > 5 ? 1 : 0}}>
                <a href="https://xkcd.com/2835/" target="_blank">https://xkcd.com/2835/</a>
            </p>
            <div className="counterBox">
                <div className="counterPadding"></div>
                <div className="counter">
                    {wheels}
                </div>
            </div>
            {/*<button onClick={() => setCount(0)}>Reset</button>*/}
            <div className="installInstructions">
                <div className="tabbar">
                    <button onClick={() => setSelectedInstructions("python")} className={selectedInstructions === "python" ? "active" : ""}>Python</button>
                    <button onClick={() => setSelectedInstructions("javascript")} className={selectedInstructions === "javascript" ? "active" : ""}>JavaScript</button>
                </div>
                <div className="content">
                    {installInstructions[selectedInstructions]}
                </div>
            </div>

        </>
    )
}

export default App
