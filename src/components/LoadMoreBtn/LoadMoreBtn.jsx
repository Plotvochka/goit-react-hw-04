import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleLoad }) {
  return (
    <button className={css.button} onClick={handleLoad} type="button">
      Load more
    </button>
  );
}
