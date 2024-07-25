import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleSetToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return { toggle, handleSetToggle };
};
