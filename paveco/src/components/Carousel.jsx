import { useEffect, useState, useRef } from "react";

export default function Carousel(props) {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef(null);

  const selectNewImage = (images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
        ? selectedIndex - 1
        : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  useEffect(() => {
    if (isLoaded) {
      const timer = setInterval(next, 4500);
      return () => clearInterval(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    const img = imageRef.current;
    if (img) {
      img.onload = () => setIsLoaded(true);
    }
  }, [imageRef]);

  return (
    <>
      <div className="col-12">
        <img
          ref={imageRef}
          src={require(`../assets/carousel/${selectedImage}`)}
          alt="Paveco"
          className="c-banner"
        />
      </div>
    </>
  );
}