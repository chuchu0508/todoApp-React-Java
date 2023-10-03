import { useState } from "react"
import { Button } from 'primereact/button'


export default function Counter() {
    const [count, setCount] = useState(0)
    function incrementCount(incrementValue) {
        setCount(count + incrementValue)
    }
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton incrementValue={1} incrementTotal={incrementCount}></CounterButton>
            <CounterButton incrementValue={2} incrementTotal={incrementCount}></CounterButton>
            <CounterButton incrementValue={5} incrementTotal={incrementCount}></CounterButton>
        </>

    )
}

function CounterButton({ incrementValue, incrementTotal }) {
    const [count, setCount] = useState(0)
    // function incrementCount() {
    //     setCount(count + incrementValue)
    //     incrementTotal(incrementValue);
    // }
    return (
        <div className="Counter">
            <span className="Counter-count">{count}</span>
            <Button rounded raised onClick={() => {
                setCount(count + incrementValue)
                incrementTotal(incrementValue)
            }}>+{incrementValue}</Button>
        </div>
    )
}