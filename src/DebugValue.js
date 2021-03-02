import { useState, useEffect, useDebugValue } from "react";

const useIsRaining = () => {
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    // pretend here you'd make an API request to a weather API
    // instead we're just going to fake it

    setIsRaining(Math.random() > 0.5);
  });

  useDebugValue(isRaining ? "Is Raining" : "Is Not Raining");

  return isRaining;
};

const DebugValueComponent = () => {
  const isRaining = useIsRaining();

  return (
    <div>
      <h1>useDebugValue Example</h1>
      <h2>Do you need a coat today? {isRaining ? "yes" : "maybe"}</h2>
    </div>
  );
};

export default DebugValueComponent;
