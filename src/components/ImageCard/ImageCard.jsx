import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt, contain }) {
  return (
    <>
      <div
        className={contain ? css.container + " " + css.contain : css.container}
      >
        <img src={src} alt={alt} />
      </div>
    </>
  );
}
