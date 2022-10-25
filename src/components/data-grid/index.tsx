type GridColumnType = 'string' | 'date' | 'amount';

export type GridColumn<R> = {
  field: Extract<keyof R, string>;
  header: string;
  width?: number;
  type?: GridColumnType;
};

type DataGrid<R = any> = { rows: R[]; columns: GridColumn<R>[] };

export const DataGrid = ({ rows, columns }: DataGrid) => (
  <table className="w-full">
    <thead>
      <tr>
        {columns.map(({ field, header }) => (
          <th key={field} className="text-sm text-left px-4 py-2">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody></tbody>
  </table>
);

// border-t
