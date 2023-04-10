import { useState } from "react";
export default function ImageWithFallback({
  src,
  alt,
  link,
  className,
  imgClassName,
}) {
  //   const [src, setSrc] = useState(src);
  const [error, setError] = useState(false);

  function handleImageError() {
    // setSrc(props.fallbackSrc);
    console.log(error);
    setError(true);
  }

  if (error) return <></>;
  return (
    <div
      onClick={() => (link ? window.open(link, "_blank") : {})}
      className={`black-gradient w-24 h-10 rounded-full flex justify-center items-center cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onError={handleImageError}
        className={`${imgClassName}`}
      />
    </div>
  );
}
