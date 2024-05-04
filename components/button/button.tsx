import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "black" | "red" | "green";
};

export const Button = (props: ButtonProps) => {
  const { children, size = "medium", color = "black" } = props;

  const textSizes = {
    small: "text-sm",
    medium: "text-lg",
    large: "text-xl",
  };

  const paddingSizes = {
    small: "px-4 py-2",
    medium: "px-6 py-2",
    large: "px-8 py-3",
  };

  return (
    <motion.button
      className={`rounded-md relative 
      radial-gradient-${color} ${textSizes[size]} ${paddingSizes[size]}`}
      initial={{ "--x": "100%", scale: 1 } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.89 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span
        className="text-neutral-100 tracking-wide font-light 
        h-full w-full block relative linear-mask"
      >
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};
