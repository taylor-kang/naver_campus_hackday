import Delivery from "./delivery"
export default interface OrderItem{
  id: number;
  order_id: number;
  price: number;
  name: string;
  img_url: string;
  url: string;
  category: string
  option?: string
  amount: number | 1;
  status: string;
  delivery: Delivery
}
