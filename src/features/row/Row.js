import React from "react";
import "./row.scss";

function Row({ locker, available }) {
  return (
    <tr className="row">
      <td>
        H{locker?.height} * W{locker?.width} * D{locker?.depth}
      </td>
      <td>
        N{locker?.price} per item/mon N15,000 XX no of orders <br /> Online only
        price
      </td>
      <td>N1 for first rent</td>
      <td>{available} Available</td>
      <td>
        <div className="rentButton">
          <a href="#">Rent Now</a>
          {console.log(locker)}
        </div>
      </td>
    </tr>
  );
}

export default Row;
