import React, { useEffect, useState } from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  const getCusomColor = () => {
    if (theme.theme === "dark") {
      return "#eee"; // Even lighter grey for dark mode
    } else if (theme.theme === "light") {
      return "#222"; // Slightly lighter dark grey for light mode
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {mount && (
        <CustomCursor
          targets={[".link"]}
          customClass="custom-cursor"
          dimensions={30}
          fill={getCusomColor()}
          smoothness={{
            movement: 0.1, // Balanced movement speed
            scale: 0.05,   // Faster scaling
            opacity: 0.1,  // Smooth opacity transitions
          }}
          targetOpacity={0.7} // Slightly higher target opacity for better visibility
          targetScale={1.5}   // Reduced scale for better usability
        />
      )}
    </>
  );
};

export default Cursor;
