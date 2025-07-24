import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return ()=> clearTimeout(timeout);
  },[]);

  return <h1>I've rendered {count} times!</h1>;
}
