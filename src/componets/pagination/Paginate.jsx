import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './style.css';
import { useState } from 'react';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function PaginatedItems({ itemsPerPage = 10, onClick, totalItems = items.length }) {
  const [, setItemOffset] = useState(0);

  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
    onClick(event.selected);
  };

  return (
    <div className='pagination-container'>
      <ReactPaginate
        breakLabel='...'
        nextLabel='Next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        previousLabel='Prev'
        renderOnZeroPageCount={null}
        containerClassName='paginationButtons'
        activeClassName='activePaginate'
      />
    </div>
  );
}

PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
};
