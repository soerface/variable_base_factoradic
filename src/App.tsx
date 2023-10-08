import {useEffect, useState} from 'react'
import './App.css'
import {toFactoradic} from "variable-base-factoradic";
import Wheel from "./Wheel.tsx";

function App() {
    const [count, setCount] = useState(parseInt(localStorage.getItem("count") || "0"))

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

    const wheels = [...Array(9).keys()].map((i) => {
        const elements = [...Array(10 - i).keys()].map((j) => (j).toString())
        const idx = parseInt(factoradic[factoradic.length - 9 + i]);
        return <Wheel key={i} elements={elements} currentIndex={idx || 0}/>
    });

    return (
        <>
            {/*                <button onClick={() => setCount(0)}>Reset</button>*/}
            {/*<button onClick={() => setCount(count + fromFactoradic("10000000"))}>++</button>*/}
            {/*<button onClick={() => setCount(count + 5)}>+</button>*/}
            {/*<button onClick={() => setCount(count - 5)}>-</button>*/}
            {/*<button onClick={() => setCount(count - fromFactoradic("10000000"))}>--</button>*/}
                        <p style={{opacity: count > 5 ? 1 : 0}}>
                <a href="https://xkcd.com/2835/" target="_blank">https://xkcd.com/2835/</a>
            </p>
            <div className="counter">
                                {wheels}
                            </div>
        </>
    )
}

export default App
