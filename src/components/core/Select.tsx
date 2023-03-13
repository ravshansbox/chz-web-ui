import { type ComponentType } from 'react';

type Item = { id: string; name: string };
type SelectProps = {
  items: Item[];
  value: Item | null;
  onChange: (item: Item | null) => void;
};
export const Select: ComponentType<SelectProps> = ({ items, value, onChange }) => {
  return (
    <select
      value={value?.id}
      onChange={(event) => {
        const item = items.find((item) => item.id === event.target.value);
        onChange(item ?? null);
      }}
    >
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
