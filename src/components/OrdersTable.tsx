import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import orders from "../data/orders.json";
import { ORDER_COLUMNS } from "../helpers/helper";
import { useState } from "react";
import { InputText } from "primereact/inputtext";

const OrdersTable = () => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toString().includes(search)
  );

  const header = (
    <div className="flex flex-col justify-between items-center md:flex-row">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
        Orders
      </h2>
      <div className=" md:flex p-input-icon-left w-full md:w-auto">
        <i className="pi pi-search" />
        <InputText
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or ID"
          className="p-inputtext p-component w-full rounded-md border shadow-sm focus:outline-none focus:ring focus:ring-blue-300 px-3 py-2"
        />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="overflow-x-auto">
        <DataTable
          value={filteredOrders}
          header={header}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          emptyMessage="No orders found."
          className="p-datatable-striped shadow-md rounded-lg"
        >
          {ORDER_COLUMNS.map((item) => (
            <Column key={item.columnKey} {...item} />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default OrdersTable;
