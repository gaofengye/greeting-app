import { ReactComponent as ArrowDownSVG } from 'assets/arrowDownSort.svg';
import { FC, ReactElement, useState } from 'react';

import styles from './styles.module.scss';

type Line = {
  columnName: string;
  value: ReactElement | string;
  isSortable?: boolean;
  order?: string;
};

export type Data = Array<Line>;

type Props = {
  data: Array<Data>;
};

const Table: FC<Props> = ({ data }) => {
  const [tableData, setTableData] = useState<Array<Data>>(data);

  const sortData = (fieldName: string, order: string | undefined) => {
    let sortOrder = order;
    if (!sortOrder) {
      sortOrder = 'ASC';
    }

    setTableData([
      ...data
        .sort((a, b) => {
          // Need to find the right cell for each line
          const aCell = a.find((cell) => cell.columnName === fieldName);
          const bCell = b.find((cell) => cell.columnName === fieldName);

          // Sort each line based on the sortOrder
          if (aCell && bCell) {
            if (aCell.value > bCell.value) {
              return sortOrder === 'ASC' ? 1 : -1;
            } else if (aCell.value < bCell.value) {
              return sortOrder === 'ASC' ? -1 : 1;
            } else {
              return 0;
            }
          }

          return 0;
        })
        .map((line) => [
          ...line.map((cell) => ({
            ...cell,
            // Update the sort order in each cell
            order: cell.columnName === fieldName ? (sortOrder === 'ASC' ? 'DESC' : 'ASC') : 'ASC',
          })),
        ]),
    ]);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {tableData[0].map((cell, i) => (
            <th key={`th_${i}`}>
              <span>{cell.columnName}</span>
              {cell.isSortable && (
                <ArrowDownSVG
                  onClick={() => sortData(cell.columnName, cell.order)}
                  className={[styles.sortIcon, cell.order === 'DESC' ? styles.rotate : ''].join(' ')}
                />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((line, j) => (
          <tr key={`tr_${j}`}>
            {line.map((cell, k) => (
              <td key={`td_${k}`}>{cell.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
