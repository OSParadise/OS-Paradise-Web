import { useState } from "react";
import {
  Pagination as ReactstrapPagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

interface IRenderComponentProps {
  data: any;
}

interface IProps {
  data: any[];
  RenderComponent: React.FunctionComponent<IRenderComponentProps>;
  pageLimit: number;
  dataLimit: number;
}

/**
 * Pagination wrapper.
 */
function Pagination(props: IProps) {
  const [pages] = useState(Math.round(props.data.length / props.dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function handleNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function handlePreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * props.dataLimit - props.dataLimit;
    const endIndex = startIndex + props.dataLimit;
    return props.data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const middle = Math.floor(props.pageLimit / 2);
    const start = Math.max(currentPage - props.pageLimit + middle, 0);

    return new Array(props.pageLimit).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div>
        {getPaginatedData().map((data, i) => (
          <props.RenderComponent key={i} data={data} />
        ))}
      </div>

      <ReactstrapPagination>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink onClick={handlePreviousPage} previous href="#" />
        </PaginationItem>
        {getPaginationGroup().map((item, i) => (
          <PaginationItem
            disabled={item - 1 > pages}
            active={currentPage === item}
            key={i}
          >
            <PaginationLink onClick={(e) => handlePageChange(item)} href="#">
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === pages}>
          <PaginationLink onClick={handleNextPage} next href="#" />
        </PaginationItem>
      </ReactstrapPagination>
    </>
  );
}

export default Pagination;
