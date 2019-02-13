import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function ReactPaginateComponent(props) {
  const {
    current,
    total,
    pageRange,
    marginRange,
    hidePreviousNext,
    previousLabel,
    nextLabel,
    breakLabel,
    containerClass,
    pageClass,
    linkClass,
    activeClass,
    activeLinkClass,
    previousClass,
    previousLinkClass,
    nextClass,
    nextLinkClass,
    disabledClass,
    onChange
  } = props;
  const [currentPage, setCurrent] = useState(current);
  const [paginate, setPaginate] = useState([]);
  useEffect(() => {
    if (current != currentPage) onChange(currentPage);
    setPaginate(pagination(currentPage, total));
  }, [currentPage]);

  const pagination = () => {
    const left = Math.floor(currentPage - (pageRange - 1) / 2),
      right = Math.ceil(currentPage + (pageRange - 1) / 2),
      range = [],
      rangeWithBreak = [];
    let last;
    for (let i = 1; i <= total; i++) {
      if (
        i <= marginRange ||
        i > total - marginRange ||
        (i >= left && i <= right)
      ) {
        range.push(i);
      }
    }
    for (let i of range) {
      if (last) {
        if (i - last === 2) {
          rangeWithBreak.push(last + 1);
        } else if (i - last !== 1) {
          rangeWithBreak.push(breakLabel);
        }
      }
      rangeWithBreak.push(i);
      last = i;
    }
    return rangeWithBreak;
  };

  const handleOnChange = currentValue => {
    setCurrent(currentValue);
  };

  return (
    <ul className={containerClass}>
      {!hidePreviousNext && (
        <li
          className={cx(previousClass, { [disabledClass]: currentPage == 1 })}
        >
          <a
            href="javascript:;"
            className={previousLinkClass}
            onClick={() => handleOnChange(Math.max(currentPage - 1, 1))}
            dangerouslySetInnerHTML={{ __html: previousLabel }}
          />
        </li>
      )}
      {paginate.map((item, index) => (
        <li
          className={cx(pageClass, { [activeClass]: currentPage == item })}
          key={index}
        >
          {item == breakLabel ? (
            <span dangerouslySetInnerHTML={{ __html: breakLabel }} />
          ) : (
            <a
              href="javascript:;"
              className={cx(linkClass, {
                [activeLinkClass]: currentPage == item
              })}
              onClick={() => handleOnChange(item)}
            >
              {item}
            </a>
          )}
        </li>
      ))}
      {!hidePreviousNext && (
        <li
          className={cx(nextClass, {
            [disabledClass]: currentPage == total
          })}
        >
          <a
            href="javascript:;"
            className={nextLinkClass}
            onClick={() => handleOnChange(Math.min(currentPage + 1, total))}
            dangerouslySetInnerHTML={{ __html: nextLabel }}
          />
        </li>
      )}
    </ul>
  );
}

ReactPaginateComponent.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageRange: PropTypes.number,
  marginRange: PropTypes.number,
  hidePreviousNext: PropTypes.bool,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  breakLabel: PropTypes.string,
  containerClass: PropTypes.string,
  pageClass: PropTypes.string,
  linkClass: PropTypes.string,
  activeClass: PropTypes.string,
  activeLinkClass: PropTypes.string,
  previousClass: PropTypes.string,
  previousLinkClass: PropTypes.string,
  nextClass: PropTypes.string,
  nextLinkClass: PropTypes.string,
  disabledClass: PropTypes.string
};

ReactPaginateComponent.defaultProps = {
  current: 1,
  total: 1,
  pageRange: 5,
  marginRange: 1,
  hidePreviousNext: false,
  previousLabel: "previous",
  nextLabel: "next",
  breakLabel: "...",
  containerClass: "paginate-container",
  pageClass: "paginate-page",
  linkClass: "paginate-link",
  activeClass: "paginate-active",
  activeLinkClass: "paginate-active-link",
  previousClass: "paginate-previous",
  previousLinkClass: "paginate-previous-link",
  nextClass: "paginate-next",
  nextLinkClass: "paginate-next-link",
  disabledClass: "paginate-disabled",
  onChange: () => {}
};

export default ReactPaginateComponent;
