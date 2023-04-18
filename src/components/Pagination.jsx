import React from "react";
import { Pagination, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import "./Pagination.scss";

export default function PaginationPost({ data, rowsPerPage, totalPages = 1 }) {
  const rows = data.length;
  // use lastPage later to map pagination items and arrows
  const lastPage = Math.ceil(rows / rowsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showedData, showData] = React.useState(data.slice(0, rowsPerPage));

  const handleClick = (page) => {
    if (page >= 1 && page <=totalPages){
      setCurrentPage(page);
      const pageIndex = page - 1;
      const firstIndex = pageIndex * rowsPerPage;
      const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
      showData(data.slice(firstIndex, lastIndex));
    }
   
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handleClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container>
      <Row xs={1} md={3} className="g-4 destinations">
        {showedData.map((data) => data)}
      </Row>
      <Pagination className="pagination-destinations">
        <Pagination.First onClick={()=>handleClick(1)} />
        <Pagination.Prev onClick={()=>handleClick(currentPage - 1)} />
        {items}
        <Pagination.Next  onClick={()=>handleClick(currentPage + 1)}/>
        <Pagination.Last onClick={()=>handleClick(totalPages)}/>
      </Pagination>
    </Container>
  );
}
