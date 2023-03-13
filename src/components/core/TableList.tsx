import { Entity } from '../../common/types';
import { Table, TableBodyCell, TableHeadCell } from './Table';

interface TableListProps<K extends string, T extends Entity<Record<K, string | number | boolean>>> {
  items: T[];
  headerTitles: string[];
  cellPropKeys: K[];
}
export function TableList<
  K extends string,
  T extends Entity<Record<K, string | number | boolean>>,
>({ items, headerTitles, cellPropKeys }: TableListProps<K, T>) {
  return (
    <Table>
      <thead>
        <tr>
          {headerTitles.map((headerTitle, index) => (
            <TableHeadCell key={index}>{headerTitle}</TableHeadCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {cellPropKeys.map((cellPropKey) => (
              <TableBodyCell key={cellPropKey}>{String(item[cellPropKey])}</TableBodyCell>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
