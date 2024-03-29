import React, { useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";
import { selectSelectedPost } from "../slices/postSlice";
import "./Pagination.scss";

export default function PaginationPost({ data, rowsPerPage, totalPages = 1 }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showedData, setShowedData] = React.useState(data.slice(0, rowsPerPage));
  const selectedPost = useSelector(selectSelectedPost);

  useEffect(() => {
    if (data) {
      setShowedData(data.slice(0, rowsPerPage));
    }
  }, [data]);

  useEffect(() => {
    if (selectedPost) {
      const current = Math.ceil(selectedPost.id / rowsPerPage);
      handleClick(current);
    }
  }, [selectedPost]);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const pageIndex = page - 1;
      const firstIndex = pageIndex * rowsPerPage;
      const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
      setShowedData(data.slice(firstIndex, lastIndex));
      scroll();
    }
  };

  function scroll() {
    const scrollTo = document.getElementById("destinos");
    scrollTo.scrollIntoView({ behavior: "smooth" }, true);
  }

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
    <Container fluid className="container-posts">
      <Row className="destinations">{showedData.map((data) => data)}</Row>
      <Pagination className="pagination-destinations">
        <Pagination.First onClick={() => handleClick(1)} />
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} />
        {items}
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
        <Pagination.Last onClick={() => handleClick(totalPages)} />
      </Pagination>
    </Container>
  );
}
