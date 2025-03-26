import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface VisibilityCountUpProps {
  count?: number;
}

const VisibilityCountUp: React.FC<VisibilityCountUpProps> = ({ count = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <span ref={ref}>
      {inView ? <CountUp start={0} end={count} duration={2} /> : 0}
    </span>
  );
};

export default VisibilityCountUp;
