import React from "react";
import BookImage from "../atoms/BookImage";
import BookName from "../atoms/BookName";
export default function BookCard() {
  return (
    <>
      <div id="book-card-container">
        <BookImage></BookImage>
        <BookName></BookName>
      </div>
    </>
  );
}
