import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Cell = function (props) {
  return (
    <div className="cell" onClick={props.onClick}>
      {props.text}
    </div>
  );
};

const Chessboard = function () {
  const [cells, setCells] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [n, setN] = useState(0);
  const tell = (s, x, y) => {
    const directions = [
      [0, 1],
      [1, 0],
      [-1, 1],
      [1, 1],
    ];
    for (let de = 0; de < directions.length; de++) {
      const direction = directions[de];
      var count = 1;
      var offsetX = x + 1 * direction[0],
        offsetY = y + 1 * direction[1];
      for (; offsetX >= 0 && offsetX < 3 && offsetY >= 0 && offsetY < 3; ) {
        let t = cells[offsetX][offsetY];
        if (s !== t) {
          break;
        }
        count += 1;
        offsetX = offsetX + 1 * direction[0];
        offsetY = offsetY + 1 * direction[1];
      }
      offsetX = x - 1 * direction[0];
      offsetY = y - 1 * direction[1];
      for (; offsetX >= 0 && offsetX < 3 && offsetY >= 0 && offsetY < 3; ) {
        let t = cells[offsetX][offsetY];
        if (s !== t) {
          break;
        }
        count += 1;
        offsetX = offsetX - 1 * direction[0];
        offsetY = offsetY - 1 * direction[1];
      }
      if (count >= 3) {
        return true;
      }
    }
    return false;
  };
  const onClickCell = function (row, col) {
    // 改变 cells
    const newCells = JSON.parse(JSON.stringify(cells));
    newCells[row][col] = n % 2 === 0 ? "X" : "O";
    setCells(newCells);
    // n + 1
    setN(n + 1);
    // 判断谁赢了
    if (tell(newCells[row][col], row, col) === true) {
      console.log(newCells[row][col] + "赢了");
    }
  };

  return (
    <div>
      <div>n:{n}</div>
      {cells.map((items, row) => (
        <div className="row">
          {items.map((item, col) => (
            <div>
              <Cell text={item} onClick={() => onClickCell(row, col)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(
  <div>
    <Chessboard />
  </div>,
  document.getElementById("root")
);
