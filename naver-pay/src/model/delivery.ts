import User from "./user";

export default interface DeliveryInfo {
  name: string;
  phone: string;
  address: string;
  memo?: string;
  user: User;
}