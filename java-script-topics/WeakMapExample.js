import React, { useEffect, useRef } from "react";

export default function WeakMapExample() {
  const elementRef = useRef();
  const clickData = new WeakMap();

  useEffect(() => {
    const elem = elementRef.current;
    clickData.set(elem, 0);

    const handleClick = () => {
      let count = clickData.get(elem) || 0;
      count++;
      clickData.set(elem, count);
      console.log(`Clicked ${count} times`);
    };

    elem.addEventListener("click", handleClick);
    return () => elem.removeEventListener("click", handleClick);
  }, []);

  return <button ref={elementRef}>Click Me</button>;
}
