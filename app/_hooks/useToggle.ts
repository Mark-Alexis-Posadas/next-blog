import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleSetToggle = () => {
    setToggle((prevToggle) => !prevToggle);
    document.body.classList.toggle("dark");
  };

  return { toggle, handleSetToggle };
};
