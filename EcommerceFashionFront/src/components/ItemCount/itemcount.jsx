import { useState, useEffect } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initialValue)
    
    useEffect(() => {
        console.log('accion useEffect')
        document.title = 'Count:' + count
        return () => {
            console.log('limpieza useEffect')
            document.title = 'General Store'
        }
    }, [count])
    
    console.log('render count')
    const decrement = () => {
        setCount(count => count - 1)
    }
    
    const increment = () => {
            setCount(prev => prev + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Disminuir 1</button>
            <button onClick={increment}>Aumentar 1</button>
        </div>
    )
}

export default ItemCount