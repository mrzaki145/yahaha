import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt({ options, ...rest }) {
  const tilt = useRef(null);
  if (!tilt.current) document.createElement("div");

  useEffect(() => {
    const titlEle = tilt.current;
    VanillaTilt.init(titlEle, options);

    return () => titlEle.remove();
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default Tilt;
