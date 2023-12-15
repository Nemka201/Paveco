import { useEffect, useState } from "react";

export default function Carousel(props) {
  const images = ["1.jpg", "2.jpg", "3.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
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
    }, 500);
  };
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };
  const next = () => {
    selectNewImage(selectedIndex, images);
  };
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <div className="col-12">
        <img
          src={require(`../assets/img/${selectedImage}`)}
          alt="Paveco"
          className="c-banner"
          onLoad={() => setLoaded(true)}
        />
        <div className="text-on-image">
          <h1 class="titulo-paveco">PAVECO</h1>
          <hr></hr>
          <h5>ASFALTO ECOLÓGICO.</h5>
        </div>
      </div>
    </>
  );
}
