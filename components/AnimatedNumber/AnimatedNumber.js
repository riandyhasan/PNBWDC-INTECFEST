import React, { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

export default function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef();

  const [inViewRef, inView] = useInView({ threshold: 0.1 });
  const [started, setStarted] = useState(false);

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) {
      setStarted(true);
    }
  }, [inView]);

  useEffect(() => {
    let controls;

    if (started) {
      const node = ref.current;

      controls = animate(0, value, {
        duration: 1,
        onUpdate(value) {
          node.textContent = `${value.toFixed(0)}${suffix}`;
        },
      });
    }

    return () => (started ? controls.stop() : null);
  }, [value, started]);

  return <span ref={setRefs} />;
}
