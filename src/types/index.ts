export interface Order {
  id: number;
  customerName: string;
  status: StatusEnum;
  items: string[];
  createdAt: string;
}

export enum StatusEnum {
  New = "New",
  Picking = "Picking",
  Delivering = "Delivering",
}
