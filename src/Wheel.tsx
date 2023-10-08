import './Wheel.css'

function Wheel({ elements, currentIndex }: { elements: string[], currentIndex: number}) {
    const transform = `translateY(${currentIndex * -10}%)`
    return <>
        <div className="wheel" style={{ transform }}>
            {elements.map((element, index) => {
                const offset = index - currentIndex
                const opacity = Math.max(0.3, 1 - Math.abs(offset) / 8)
                const transform = `translateY(${offset * -48}%) scale(${opacity})`
                return <div key={index} className="wheel-element" style={{ opacity, transform }}>{element}</div>
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