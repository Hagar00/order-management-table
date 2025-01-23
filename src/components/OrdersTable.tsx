import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import orders from "../data/orders.json";
import { ORDER_COLUMNS } from "../helpers/helper";

const OrdersTable = () => {
  return (
    <div className="py-10 sm:p-10">
      <DataTable
        paginator
        scrollable
        rows={5}
        removableSort
        showGridlines
        paginatorTemplate={{
          layout: "PrevPageLink CurrentPageReport NextPageLink",
        }}
        value={orders}
      >
        {ORDER_COLUMNS.map((item) => (
          <Column key={item.columnKey} {...item} />
        ))}
      </DataTable>
    </div>
  );
};

export default OrdersTable;
