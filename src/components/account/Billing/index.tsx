import { ReactComponent as PdfSVG } from 'assets/pdf.svg';
import Table from 'components/common/Table';
import { FC } from 'react';

const Billing: FC = () => {
  return (
    <Table
      data={[
        [
          { columnName: 'REFERENCE ID', value: '4571222f6rthswfg9981fr55', isSortable: true },
          { columnName: 'DATE', value: '7/12/2020', isSortable: true },
          { columnName: 'AMOUNT', value: '$28', isSortable: true },
          { columnName: 'INVOICE', value: <PdfSVG /> },
        ],
        [
          { columnName: 'REFERENCE ID', value: '4571222f6rthswfg9981fr55', isSortable: true },
          { columnName: 'DATE', value: '7/12/2020', isSortable: true },
          { columnName: 'AMOUNT', value: '$36', isSortable: true },
          { columnName: 'INVOICE', value: <PdfSVG /> },
        ],
        [
          { columnName: 'REFERENCE ID', value: '4571222f6rthswfg9981fr55', isSortable: true },
          { columnName: 'DATE', value: '7/12/2020', isSortable: true },
          { columnName: 'AMOUNT', value: '$14', isSortable: true },
          { columnName: 'INVOICE', value: <PdfSVG /> },
        ],
      ]}
    />
  );
};

export default Billing;
