import React from "react";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  console.log("books", books);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="border-2 border-gray-500 rounded-lg px-4 m-4 relative hover:shodow-xl"
        >
          <BookSingleCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
