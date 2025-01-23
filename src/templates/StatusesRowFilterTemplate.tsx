import { Dropdown } from "primereact/dropdown";
import { ColumnFilterElementTemplateOptions } from "primereact/column";

import { STATUSES } from "../constants/constants";

interface Props {
  options: ColumnFilterElementTemplateOptions;
}

const StatusesRowFilterTemplate = ({ options }: Props) => {
  return (
    <Dropdown
      value={options.value}
      options={STATUSES}
      onChange={(e) => options.filterCallback(e.value)}
      placeholder="Any"
      className="p-column-filter"
    />
  );
};

export default StatusesRowFilterTemplate;
