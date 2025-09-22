import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/stores";
import { useState } from "react";

export default function YourCart() {
  const cart = useSelector((state: RootState) => state.cart);
  const noti = useSelector((state: RootState) => state.noti);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      dispatch({ type: "DELETE_CART", payload: id });
      setMessage("Delete cart successfully");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const handleUpdate = (id: number, quantity: number, stock: number) => {
    if (quantity > stock) {
      dispatch({ type: "SET_NOTI", payload: "Số lượng sản phẩm vượt quá số lượng trong kho" });
      setTimeout(() => dispatch({ type: "SET_NOTI", payload: "" }), 2000);
      return;
    }
    dispatch({ type: "UPDATE_CART", payload: { id, quantity } });
  };

  return (
    <div className="bg-red-100 rounded border p-4">
      <h2 className="font-bold text-lg mb-2 text-red-700">Your Cart</h2>
      <table className="w-full text-left mb-2">
        <thead>
          <tr className="border-b">
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-2">Empty product in your cart</td>
            </tr>
          ) : (
            cart.map((item, idx) => (
              <tr key={item.id} className="border-b">
                <td>{idx + 1}</td>
                <td>{item.productName}</td>
                <td>{item.price} USD</td>
                <td>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    className="w-16 border rounded px-2"
                    onChange={e => handleUpdate(item.id, Math.max(1, Number(e.target.value)), item.stock)}
                  />
                </td>
                <td>
                  <button
                    className="bg-blue-400 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleUpdate(item.id, item.quantity, item.stock)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-400 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {cart.length > 0 && (
        <>
          <div className="mb-2">
            There are <span className="font-bold">{cart.length}</span> items in your shopping cart.
          </div>
          <div className="text-red-600 font-bold text-lg">{total} USD</div>
        </>
      )}
      {(message || noti) && (
        <div className={`mt-2 p-2 rounded ${message ? "bg-red-200 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message || noti}
        </div>
      )}
    </div>
  );
}