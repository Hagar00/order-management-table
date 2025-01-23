import { Order } from "../types";

interface Props {
  rowData: Order;
}

const ItemsTemplate = ({ rowData }: Props) => {
  const { items } = rowData;

  return (
    <div className="flex items-center gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="px-4 py-2 rounded-full text-nowrap bg-orange-100 text-orange-500"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ItemsTemplate;
