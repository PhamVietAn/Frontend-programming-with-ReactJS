import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/stores";

export default function ListProduct() {
  const products = useSelector((state: RootState) => state.products);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (product: any) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="bg-blue-100 rounded border p-4">
      <h2 className="bg-blue-700 text-white px-4 py-2 rounded-t font-bold mb-4">List Products</h2>
      <div>
        {products.map(item => (
          <div key={item.id} className="flex items-center mb-6 bg-white rounded shadow p-4">
            <img src={item.image} alt="image" className="w-32 h-24 object-cover rounded mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.productName}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="flex flex-col items-end ml-4">
              <input
                type="number"
                min={1}
                value={cart.find(c => c.id === item.id)?.quantity || 1}
                readOnly
                className="border rounded px-2 py-1 w-16 mb-2 text-right"
              />
              <button
                className={`px-4 py-1 rounded font-bold ${item.price === 30 ? "bg-gray-400" : "bg-orange-500"} text-white`}
                onClick={() => handleAdd(item)}
              >
                {item.price} USD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}