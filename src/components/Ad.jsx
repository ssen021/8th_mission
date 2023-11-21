import React from "react";
import AD_image from "./AD_image.svg";

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <div>
      <img
        src={AD_image}
        alt="광고 배너"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Ad;
