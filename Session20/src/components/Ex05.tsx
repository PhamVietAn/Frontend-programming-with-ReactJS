import { useEffect, useState } from 'react'

export default function Ex05() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
  return (
    <div>Count: {count}</div>
  )
}
