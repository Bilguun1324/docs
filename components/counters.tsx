import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
}

const MyApp = () => {
  return <MyButton />;
};

export default MyApp;
