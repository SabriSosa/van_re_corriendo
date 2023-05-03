import Table from "react-bootstrap/Table";

import { AiFillEdit } from "react-icons/ai";

const TableHeader = (props) => {
  const { headers } = props;
  return (
    <thead className="thead-dark" key="header-1">
      <tr key="header-0">
        {headers &&
          headers.map((value, index) => {
            return (
              <th key={index}>
                <div>{value}</div>
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { headers, rows, onClick } = props;

  function buildRow(row, headers) {
    return (
      <tr key={row.id}>
        {headers.map((value, index) => {
          return (
            <td key={index}>
              {value === "edit" ? (
                <AiFillEdit onClick={() => onClick(row.id)} />
              ) : (
                row[value]
              )}
            </td>
          );
        })}
      </tr>
    );
  }

  return (
    <tbody>
      {rows &&
        rows.map((value) => {
          return buildRow(value, headers);
        })}
    </tbody>
  );
};
const CustomTable = (props) => {
  const { headers, rows, onClick } = props;
  return (
    <div>
      <Table striped bordered hover size="sm">
        <TableHeader headers={headers}></TableHeader>
        <TableBody headers={headers} rows={rows} onClick={onClick}></TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
