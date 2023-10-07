import {useEffect, useState} from 'react'
import './App.css'
import {toFactoradic} from "variable-base-factoradic";

function App() {
    const [count, setCount] = useState(parseInt(localStorage.getItem("count") || "0"))

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)
        return () => clearInterval(interval)
    });

    let factoradic;

    try {
        factoradic = toFactoradic(count)
    } catch (e) {
        setCount(0)
    }
    localStorage.setItem("count", count.toString())

    return (
        <>
            <h1 className="counter">{factoradic}</h1>
            <p style={{display: count > 5 ? "" : "none"}}>
                <a href="https://xkcd.com/2835/">https://xkcd.com/2835/</a>
            </p>
            {/*<button onClick={() => setCount(0)}>Reset</button>*/}
        </>
    )
}

export default App
