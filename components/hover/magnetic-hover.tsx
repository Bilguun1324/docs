import { motion } from "framer-motion";
import { useRef, useState } from "react";

type HoverProps = {
  children: React.ReactNode;
};

export const MagneticHover = (props: HoverProps) => {
  const { children } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      className="p-12 w-fit h-fit"
      transition={{ type: "linear", stiffness: 300, damping: 15, mass: 3 }}
    >
      {children}
    </motion.div>
  );
};
