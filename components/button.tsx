import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="h-12">
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default Button;
