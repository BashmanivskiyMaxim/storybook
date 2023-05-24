import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";

export default function Table({color = "red", border="solid 1px gray"}) {
  const data = React.useMemo(
    () => [
      {
        col1: "Minsk",
        col2: "27",
        col3: "rain",
      },
      {
        col1: "Vilnius",
        col2: "30",
        col3: "rain",
      },
      {
        col1: "London",
        col2: "23",
        col3: "rain",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "City",
        accessor: "col1", 
      },
      {
        Header: "Temperature",
        accessor: "col2",
      },
      {
        Header: "Weather Forecast",
        accessor: "col3",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div>
      <table {...getTableProps()} style={{ border: border }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    color: color,
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: border,
                        color: color
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
