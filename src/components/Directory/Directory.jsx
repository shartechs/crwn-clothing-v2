import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./Directory.styles.scss";

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Directory;
