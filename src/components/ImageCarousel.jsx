import { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (images.length === 1) {
    return (
      <img
        className={"shadow-md w-full h-full"}
        src={images[0]}
        alt="Project Image"
      />
    );
  }

  return (
    <div className="flex justify-center items-center relative">
      <i
        class="fa-solid fa-circle-arrow-left filter drop-shadow-md absolute text-3xl text-white left-4 hover:cursor-pointer"
        onClick={() => {
          setActiveImage((prev) => {
            return prev !== 0 ? prev - 1 : images.length - 1;
          });
        }}
      />
      {images.map((image, index) => (
        <img
          className={
            "shadow-md w-full h-full" + (index !== activeImage && " hidden")
          }
          src={image}
          alt="Project Image"
          key={index}
        />
      ))}
      <i
        class="fa-solid fa-circle-arrow-right filter drop-shadow-md absolute text-3xl text-white right-4 hover:cursor-pointer"
        onClick={() =>
          setActiveImage((prev) => {
            return prev !== images.length - 1 ? prev + 1 : 0;
          })
        }
      />
      <span className="flex absolute bottom-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={
              "h-2 w-2 rounded-full border-none outline-none shadow-lg cursor-pointer " +
              (index === activeImage ? "bg-white" : " bg-gray-400")
            }
          ></button>
        ))}
      </span>
    </div>
  );
};

export default ImageCarousel;
