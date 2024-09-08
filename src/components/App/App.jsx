import { useEffect, useState } from "react";
import css from "./App.module.css";
import fetchImagesWithTopic from "../Service/image-api";
import Header from "../Header/Header";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [totalPage, setTotalPage] = useState(999);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState({ src: "", alt: "" });

  useEffect(() => {
    if (value.trim() === "") {
      return;
    }
    async function getImage() {
      try {
        setLoading(true);
        setError(false);
        const newImages = await fetchImagesWithTopic(value, page);
        setImages((prevState) => [...prevState, ...newImages.results]);
        setTotalPage(newImages.totalPage);
        setShowBtn(totalPage && totalPage !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImage();
  }, [value, page]);

  const handleSubmit = (value) => {
    setImages([]);
    setValue(value);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleClickImg = ({ src, alt }) => {
    setModalImg({ alt: alt, src: src });
    setIsOpen(true);
  };

  return (
    <>
      <Header submitForm={handleSubmit} />
      <div className={css.container}>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={handleClickImg} />
        )}
        {images.length > 0 && !loading && showBtn && (
          <LoadMoreBtn handleLoad={handleLoadMore} />
        )}

        <ImageModal
          src={modalImg.src}
          alt={modalImg.alt}
          isOpen={modalIsOpen}
          onClose={setIsOpen}
        />
      </div>
    </>
  );
}
