import React from "react";
import { Column, Row, useTable } from "react-table";

interface TableProps<T extends object> {
  columns: Column[];
  data: Row<T>[];
}

export const Table: React.FC<TableProps<any>> = ({ columns, data }) => {
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="overflow-x-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#F4F6F7 transparent' }}>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-white">
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((header) => (
                <th className="px-4 min-w-[200px]  w-96 py-10" {...header.getHeaderProps()}>{header.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-gray-300">
                {row.cells.map((cell) => {
                  return (
                    <td className="px-4 align-middle text-center py-4 " {...cell.getCellProps()}>
                      {/* Render profile picture as an image */}
                      {cell.column.id === "profile_picture" ? (
                        <div className="text w-full flex items-center justify-center">
                          <img src={cell.value} alt="Profile" className="w-full object-cover border border-gray-100" style={{ width: "120px", height: "90px" }} />
                        </div>
                      ) : typeof cell.value === "boolean" ? (
                        cell.value ? "True" : "False"
                      ) : (
                        cell.render("Cell")
                      )}
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
};
