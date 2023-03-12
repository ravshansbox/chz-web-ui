import { type ComponentType } from 'react';

type Item = { id: string; name: string };
type SelectProps = {
  title: string;
  items: Item[];
  value: Item | null;
  onChange: (item: Item | null) => void;
};
export const Select: ComponentType<SelectProps> = ({ title, items, value, onChange }) => {
  return (
    <select
      value={value?.id}
      onChange={(event) => {
        const item = items.find((item) => item.id === event.target.value);
        onChange(item ?? null);
      }}
    >
      <option value="">{title}</option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
