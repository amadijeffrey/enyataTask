import React from "react";
import TableHeader from "../../atoms/TableHeader/TableHeader";
import TableCell from "../../atoms/TableCell/TableCell";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Input from "../../atoms/Input/Input";
import "./Table.scss";

const Table = ({ title, headers, tableData, handleSelected }) => {
  return (
    <div className="table-component">
      <Paragraph textProps={"#a4a7b7-16-400"}>{title}</Paragraph>
      <table>
        <thead>
          <tr className="first-row">
            <TableHeader>
              <Input type="checkbox" />
            </TableHeader>
            {headers.map((header, idx) => {
              return <TableHeader key={idx}>{header}</TableHeader>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((data, idx) => {
              return (
                <tr key={idx} onClick={() => handleSelected(data)}>
                  <TableCell>
                    <Input type="checkbox" />
                  </TableCell>
                  <TableCell>{data.title || data.name}</TableCell>
                  <TableCell>
                    {(data.release_date &&
                      new Date(data.release_date).toLocaleDateString()) ||
                      data.model ||
                      data.birth_year ||
                      data.classification}
                  </TableCell>
                  <TableCell>
                    {data.director ||
                      data.starship_class ||
                      data.gender ||
                      data.eye_colors}
                  </TableCell>
                  <TableCell>
                    {data.producer || data.passengers || "blond"}
                  </TableCell>
                  <TableCell>
                    {data.episode_id ||
                      (data.length ? `${data.length} Meters` : "") ||
                      (data.height || data.average_height
                        ? `${data.height || data.average_height} CM`
                        : "")}
                  </TableCell>
                  <TableCell>
                    {(data.created &&
                      new Date(data.created).toLocaleDateString()) ||
                      "https://swapi.dev/api/people"}
                  </TableCell>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
