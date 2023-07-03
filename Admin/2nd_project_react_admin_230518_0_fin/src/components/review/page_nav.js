import { useSelector } from "react-redux";

const PageNavigation = (props) => {
  const {
    getReviewList,
    startDate,
    endDate,
    selectedRating,
    selectedSearchKey,
    selectedSearchWord,
  } = props;

  const params = {
    startDate: startDate,
    endDate: endDate,
    rating: selectedRating,
    searchKey: selectedSearchKey,
    searchWord: selectedSearchWord,
  };
  const pv = useSelector((state) =>
    state.review.pv ? state.review.pv : { currentPage: 1 }
  );

  const pageNumbers = [];
  for (let i = pv.startPage; i <= pv.endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav arial-label='Page navigation example'>
      <ul className='pagination'>
        <li className={pv.startPage <= 1 ? "page-item disabled" : "page-item"}>
          <span
            className='page-link'
            onClick={() => getReviewList(pv.startPage - pv.blockPage, params)}
          >
            &laquo;
          </span>
        </li>

        {pageNumbers.map((pnum, idx) => (
          <li
            key={pnum}
            className={pv.currentPage === pnum ? "page-item active" : null}
            aria-current={pv.currentPage === pnum ? "page" : null}
          >
            <span
              className='page-link'
              onClick={() => getReviewList(pnum, params)}
            >
              {pnum}
            </span>
          </li>
        ))}

        <li
          className={
            pv.endPage >= pv.totalPage ? "page-item disalbed" : "page-item"
          }
        >
          <span
            className='page-link'
            onClick={() => getReviewList(pv.startPage + pv.blockPage, params)}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
