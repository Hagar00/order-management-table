import { ColumnProps } from "primereact/column";

import ItemsTemplate from "../templates/ItemsTemplate";
import StatusesRowFilterTemplate from "../templates/StatusesRowFilterTemplate";
import StatusTemplate from "../templates/StatusTemplate";

export const ORDER_COLUMNS: ColumnProps[] = [
  {
    columnKey: "id",
    field: "id",
    header: "#",
    frozen: true,
    className: "bg-slate-50",
  },
  {
    columnKey: "customerName",
    field: "customerName",
    header: "Name",
    style: { width: "calc(97%/4)" },
  },
  {
    columnKey: "status",
    field: "status",
    filterField: "status",
    header: "Status",
    filter: true,
    style: { width: "calc(97%/4)" },
    showFilterMatchModes: false,
    showFilterOperator: false,
    showFilterMenuOptions: false,
    filterElement: (options) => <StatusesRowFilterTemplate options={options} />,
    body: (rowData) => <StatusTemplate rowData={rowData} />,
  },
  {
    columnKey: "items",
    field: "items",
    header: "Items",
    body: (rowData) => <ItemsTemplate rowData={rowData} />,
    style: { width: "calc(97%/4)" },
  },
  {
    columnKey: "createdAt",
    field: "createdAt",
    sortable: true,
    header: "Created At",
    className: "text-nowrap",
    style: { width: "calc(97%/4)" },
  },
];
