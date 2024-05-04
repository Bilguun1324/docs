type SpacingProps = {
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
};

export const Spacing = (props: SpacingProps) => {
  const { size = "medium", children } = props;

  const sizes = {
    small: "h-1/5 w-2/3",
    medium: "h-1/4 w-3/4",
    large: "h-1/3 w-2/3",
  };

  return (
    <div
      className={`${sizes[size]} flex items-center justify-evenly`}
    >
      {children}
    </div>
  );
};