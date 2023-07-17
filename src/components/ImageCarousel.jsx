import { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  const showControls = images.length > 1;

  const Carousel = (isBig) => {
    return (
      <div
        className={
          "flex justify-center items-center relative " +
          (isBig && "max-w-[1200px]")
        }
      >
        {showControls && (
          <i
            class="fa-solid fa-circle-arrow-left filter drop-shadow-lg absolute text-3xl text-white left-4 hover:cursor-pointer"
            onClick={() => {
              setActiveImage((prev) => {
                return prev !== 0 ? prev - 1 : images.length - 1;
              });
            }}
          />
        )}
        {images.map((image, index) => (
          <img
            onClick={() => !isBig && setShowImageModal(true)}
            className={
              "shadow-md w-full cursor-pointer pointer-events-auto overflow-hidden" +
              (index !== activeImage && " hidden") +
              (isBig ? " h-full" : " max-h-[230px]")
            }
            src={image}
            alt="Project Image"
            key={index}
          />
        ))}
        {showControls && (
          <>
            <i
              class="fa-solid fa-circle-arrow-right filter drop-shadow-lg absolute text-3xl text-white right-4 hover:cursor-pointer"
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
                    "h-2 w-2 rounded-full border-none outline-none filter drop-shadow-lg cursor-pointer " +
                    (index === activeImage ? "bg-white" : " bg-gray-400")
                  }
                ></button>
              ))}
            </span>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      {showImageModal && (
        <div
          className="fixed top-0 left-0 z-20 w-full h-full bg-gray-900/80 flex justify-center items-center"
          id="background"
          onClick={(e) => {
            const { target } = e;
            if (target && target.id === "background") setShowImageModal(false);
          }}
        >
          {Carousel(true)}
        </div>
      )}
      {Carousel(false)}
    </>
  );
};

export default ImageCarousel;
