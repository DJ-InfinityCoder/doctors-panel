import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Pagination.css"; // Assuming you will add necessary CSS

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const handleClick = (pageNumber) => {
    paginate(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      // Less than or equal to 5 pages: Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // More than 5 pages: Show first, last, and ellipsis
      pageNumbers.push(1); // Always show the first page

      // Show ellipsis if current page is greater than 4
      if (currentPage > 3) {
        pageNumbers.push("...");
      }

      // Show up to 2 pages before and after the current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Show ellipsis if current page is less than totalPages - 3
      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages); // Always show the last page
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        className="page-button"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      {renderPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`page-button ${
            page === currentPage ? "active" : ""
          } ${page === "..." ? "ellipsis" : ""}`}
          onClick={() => page !== "..." && handleClick(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className="page-button"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
