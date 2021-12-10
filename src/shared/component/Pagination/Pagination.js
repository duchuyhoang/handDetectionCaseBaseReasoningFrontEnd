import { useMemo, useState } from "react";
import "./Pagination.css";

const GoToPageToolTip = ({ onChange, currentPage,item }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedPage, setSelectedPage] = useState(false);
  return (
    <li
    key={"pagi_"+item}
      onClick={() => {
        setIsActive((prev) => !prev);
      }}
    >
      ...
      <div
        className={`paginationToolTip ${
          isActive ? "paginationToolTipActive" : ""
        }`}
      >
        Go to page:
        <input
          type="number"
          className="paginationSearchBox"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            setSelectedPage(e.target.value-1);
          }}
        />
        <button
          className="goPagnationButton"
          onClick={() => {
            if (onChange) onChange(selectedPage);
          }}
        >
          Go
        </button>
      </div>
    </li>
  );
};

export const Pagination = ({
  itemPerPage,
  totalRecord,
  page,
  boundaryCount = 1,
  siblingCount = 1,
  onChange,
}) => {
  const count = useMemo(() => Math.ceil(totalRecord / itemPerPage));

  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages[0] - 2
  );

  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ["startEllipsis"]
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount - 1
      ? ["endEllipsis"]
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
  ];

  const renderItem = (item) => {
    if (item === "startEllipsis" || item === "endEllipsis")
      return (
        <>
          <GoToPageToolTip onChange={onChange} item={item}/>
        </>
      );
    else
      return (
        <li
        key={"pagi_"+item}
          className={`${page + 1 === item ? "activePage" : ""}`}
          onClick={() => {
            if (onChange) onChange(item - 1);
          }}
        >
          {item}
        </li>
      );
  };

  return (
    <div className="paginationContainer">
      <ul>{itemList.map((item) => renderItem(item))}</ul>
    </div>
  );
};
