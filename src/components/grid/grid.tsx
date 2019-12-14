import React from 'react';
import './grid.css';

interface GridProps {
  data: number[][];
}

const range = (start: number, end: number, step: number) => {
  let res = [];
  for (let i = start; i < end; i += step) {
    res.push(i);
  }

  return res;
};

interface CellProps {
  x: number;
  y: number;
  data: string;
}

const Cell = (props: CellProps) => {
  const { x, y, data } = props;

  return (
    <div
      className={`cell-container`}
      style={{ gridRow: `${y}`, gridColumn: `${x}` }}
    >
<div className="cell"><span>{data}</span></div>
    </div>
  );
};

const Grid = (props: GridProps) => {
  const { data } = props;
  const ylen = data.length;
  const xlen = data[0].length;

  const style: React.CSSProperties = {
    display: `grid`,
    gridTemplateColumns: `repeat(${xlen}, [col-start] 25px [col-end])`,
    gridTemplateRows: `repeat(${ylen}, [row-start] 25px [row-end])`,
    gap: `3px`
  };

  if (!data) {
    return <div className="warning">There is no data</div>;
  }

  const cells = range(1, ylen+1, 1).map(y => {
    return range(1, xlen+1, 1).map(x => {
      console.log(x, y)
      return <Cell x={x} y={y} data={data[y-1][x-1]}></Cell>;
    });
  });

  return <div className={`gridland`} style={style}>{cells}</div>;
};

export default Grid;
