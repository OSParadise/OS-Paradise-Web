import { useState } from "react";
import { Pagination as ReactstrapPagination, PaginationItem, PaginationLink } from "reactstrap";

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
 * Pagination wrapper for any arbitrary set of data and associated render component.
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

      <ReactstrapPagination style={{ marginLeft: "-12px", paddingTop: "10px" }}>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            onClick={handlePreviousPage}
            previous
            href="#"
            style={{
              backgroundColor: "#40444b",
              borderColor: "#333",
              color: "#FFF",
            }}
          />
        </PaginationItem>
        {getPaginationGroup().map((item, i) => (
          <PaginationItem disabled={item - 1 > pages} active={currentPage === item} key={i}>
            <PaginationLink
              onClick={(e) => handlePageChange(item)}
              href="#"
              style={{
                backgroundColor: "#40444b",
                borderColor: "#333",
                color: !(item - 1 > pages) ? (currentPage === item ? "#44a6c6" : "#FFF") : "#36393f",
              }}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === pages}>
          <PaginationLink
            onClick={handleNextPage}
            next
            href="#"
            style={{
              backgroundColor: "#40444b",
              borderColor: "#333",
              color: "#FFF",
            }}
          />
        </PaginationItem>
      </ReactstrapPagination>
    </>
  );
}

export default Pagination;
