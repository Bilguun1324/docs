import { MagneticHover } from "./magnetic-hover";

type HoverProps = {
  children: React.ReactNode;
  varient: "magnetic";
};

export const Hover = (props: HoverProps) => {
  const { children, varient = "magnetic" } = props;

  if (varient === "magnetic") {
    return <MagneticHover>{children}</MagneticHover>;
  }

  return <div>Hover me</div>;
};
