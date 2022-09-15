import { useState, useRef, useEffect, cloneElement } from "react";

const Carousel = ({ children, ...rest }) => {
  const scrollInterval = useRef(null);
  const [active, setActive] = useState(1);
  const [indexes, setIndexes] = useState({
    prev: active - 1,
    current: active,
    next: active + 1,
  });

  useEffect(() => {
    scrollInterval.current = setTimeout(() => {
      setActive(() => (active + 1) % children.length);
    }, 2000);

    return () => clearTimeout(scrollInterval);
  });

  useEffect(() => {
    const lastIndex = children.length - 1;
    setIndexes(() => ({
      prev: active == 0 ? lastIndex : active - 1,
      current: active,
      next: active == lastIndex ? 0 : active + 1,
    }));
  }, [active, children.length]);

  return (
    <div className="carousel">
      {children.map((item, index) => {
        let activeClass = active == index ? "active" : "inactive";

        if (index == indexes.current) activeClass += " current";
        else if (index == indexes.prev) activeClass += " prev";
        else if (index == indexes.next) activeClass += " next";

        return cloneElement(item, {
          ...rest,
          className: `carousel-item ${activeClass}`,
        });
      })}
    </div>
  );
};

export default Carousel;
