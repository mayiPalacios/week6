import { useRef, useEffect } from "react";

function usePreviousValue(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePreviousValue;
