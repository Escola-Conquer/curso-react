import {useState} from 'react'

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <h3>{count}</h3>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
        </>
    )
}