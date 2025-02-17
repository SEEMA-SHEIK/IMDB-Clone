import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Banner() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-gray-300" : "bg-white"}`}>
      <div
        className="h-[70vh] w-[100vw] bg-cover bg-current"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
        }}
      ></div>
    </div>
  );
}

export default Banner;