import Seller from "./seller";
import OrderItem from "./order-item";

export default interface Order {
  order_id: number;
  date: Date;
  item_list: OrderItem[]
  seller: Seller;
}