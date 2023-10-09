import './Wheel.css'

function Wheel({ elements, currentIndex, longestWheel }: { elements: string[], currentIndex: number, longestWheel: number}) {
    const transform = `translateY(${currentIndex * -(100 / longestWheel) -(100 / longestWheel / 2)}%)`
    return <>
        <div className="wheel" style={{ transform }}>
            {elements.map((element, index) => {
                const offset = index - currentIndex
                const opacity = offset ? Math.max(0.3, 0.8 - Math.abs(offset) / longestWheel) : 1;
                const transform = `scale(${opacity})`
                const transformOrigin = 'center bottom'
                return <div key={index} className="wheel-element" style={{ opacity, transform, transformOrigin }}>{element}</div>
            })}
            {/*{elements} ({currentIndex})*/}
            {/*{elements.map((element, index) => {*/}
            {/*    const offset = index - currentIndex*/}
            {/*    const opacity = Math.max(0, 1 - Math.abs(offset) / 2)*/}
            {/*    const scale = Math.max(0, 1 - Math.abs(offset) / 4)*/}
            {/*    const transform = `translateX(${offset * 100}%) scale(${scale})`*/}
            {/*    return <div key={index} className="wheel-element" style={{ opacity, transform }}>{element}</div>*/}
            {/*})*/}
            {/*}*/}
        </div>
    </>
}

export default Wheel