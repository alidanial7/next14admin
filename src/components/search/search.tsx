import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
function Search({
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input {...props} className={styles.input} />
    </div>
  );
}

export default Search;
