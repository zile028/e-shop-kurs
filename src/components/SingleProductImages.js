import React from "react";

export default function SingleProductImages({ images, previewImage }) {
  return images.map((img, index) => {
    return (
      <div className="product-images col mt-3" key={index}>
        <img src={img} alt="" onClick={() => previewImage(img)} />
      </div>
    );
  });
}
