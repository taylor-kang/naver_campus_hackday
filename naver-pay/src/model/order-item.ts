export default interface OrderItem{
  item_id: number;
  price: number;
  name: string;
  img_url: string;
  url: string;
  category: string
  option?: string
  amount: number | 1;
  status: string;
}