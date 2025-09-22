import ListProduct from "./ListProduct";
import YourCart from "./YourCart";

export default function ShoppingCart() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex gap-6">
        <div className="w-2/3">
          <ListProduct />
        </div>
        <div className="w-1/3">
          <YourCart />
        </div>
      </div>
    </div>
  );
}