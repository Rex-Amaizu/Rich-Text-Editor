import React, { useState } from "react";

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState({});
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  return (
    <div style={{ width: "90%", height: "240px" }}>
      <img
        src={preview}
        alt="image"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PreviewImage;
