import Seller from "./seller";
import User from "./user";
import OrderItem from "./order-item";

export default interface Order {
  id: number;
  date: Date;
  price: number;
  pay_type: string;
  card_num: string;
  card_type: string;
  pay_date: Date;
  delivery_receiver: string;
  delivery_address: string;
  delivery_memo: string;
  item_list: OrderItem[];
  seller: Seller;
  user: User
}