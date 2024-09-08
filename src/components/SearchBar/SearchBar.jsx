import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { MdImageSearch } from "react-icons/md";
import css from "./SearchBar.module.css";

export default function SearchBar({ submitForm }) {
  const handleSubmitForm = (values, actions) => {
    if (values.searchImg.trim() === "") {
      return toast("What? You must entered text", {
        icon: "🔎",
      });
    }
    submitForm(values.searchImg);
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={{ searchImg: "" }} onSubmit={handleSubmitForm}>
        <Form autoComplete="off" className={css.form}>
          <MdImageSearch className={css.searchIcon} />
          <Field
            className={css.formField}
            type="text"
            name="searchImg"
            placeholder=" "
          />
        </Form>
      </Formik>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </>
  );
}
