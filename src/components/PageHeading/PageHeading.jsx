import React from "react";
import halfShape from "../../assets/half-shape.png";
import halfCircle from "../../assets/half-circle-img.png";
const PageHeading = ({ pageName }) => {
  return (
    <div
      className="py-20 lg:py-40 bg-primary"
      style={{
        backgroundImage: `url(${halfShape}), url(${halfCircle})`,
        backgroundPosition: "left bottom, right bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto, 15%",
      }}
    >
      <h2 className="text-5xl font-bold text-secondary text-center">
        {pageName}
      </h2>
    </div>
  );
};

export default PageHeading;
