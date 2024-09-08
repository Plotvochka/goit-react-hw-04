import SearchBar from "../SearchBar/SearchBar";
import css from "./Header.module.css";

export default function Header({ submitForm }) {
  return (
    <header className={css.header}>
      <SearchBar submitForm={submitForm} />
    </header>
  );
}
