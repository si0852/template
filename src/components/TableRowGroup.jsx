import React from 'react';

const TableRowGroup = ({ item, index, months }) => {
  return (
    <>
      <tr>
        <td rowSpan="2">{index + 1}</td>
        <td rowSpan="2">{item.code}</td>
        <td rowSpan="2">{item.name}</td>
        <td rowSpan="2">{item.price.toLocaleString()}</td>
        <td>검사건수</td>
        <td style={{ fontSize: "9px" }}>{item.rows[0].total}</td>
        <td style={{ fontSize: "9px" }}>{item.rows[0].예건}</td>
        <td style={{ fontSize: "9px" }}>{item.rows[0].중건}</td>
        {months.map((_, idx) => (
          <React.Fragment key={`count-${idx}`}>
            <td>-</td><td>-</td><td>-</td>
          </React.Fragment>
        ))}
      </tr>
      <tr>
        <td>검사비용</td>
        <td style={{ fontSize: "9px" }}>{item.rows[1].total.toLocaleString()}</td>
        <td style={{ fontSize: "9px" }}>{item.rows[1].예건.toLocaleString()}</td>
        <td style={{ fontSize: "9px" }}>{item.rows[1].중건.toLocaleString()}</td>
        {months.map((_, idx) => (
          <React.Fragment key={`cost-${idx}`}>
            <td>-</td><td>-</td><td>-</td>
          </React.Fragment>
        ))}
      </tr>
    </>
  );
};

export default TableRowGroup;
