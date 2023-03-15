import { useRef, useEffect } from "react";


function usePreviousValue() {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePreviousValue;
