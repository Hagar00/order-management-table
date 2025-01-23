import { Order, StatusEnum } from "../types";

interface Props {
  rowData: Order;
}

const StatusTemplate = ({ rowData }: Props) => {
  const statusStyles = {
    [StatusEnum.New]: "bg-blue-100 text-blue-800",
    [StatusEnum.Delivering]: "bg-green-100 text-green-800",
    [StatusEnum.Picking]: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div>
      <span
        className={`px-4 py-2 rounded-full text-sm font-medium 
            text-center ${statusStyles[rowData.status]}`}
      >
        {rowData.status}
      </span>
    </div>
  );
};
export default StatusTemplate;
