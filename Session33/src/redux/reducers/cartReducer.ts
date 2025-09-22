export type Product = {
  id: number;
  image: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
};

export type CartItem = Product & { quantity: number };

const initialProducts: Product[] = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/OIP.HAu8l9ToJmaNvUVYqmDe2AHaE8?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    productName: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde laborum maiores rerum. Hic, illum! Eos labore recusandae possimus, provident, beatae magni in commodi veniam ullam architecto natus hic earum!",
    price: 30,
    stock: 40,
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.CigeQe09K4ZBEFo7_akGWAHaD4?w=304&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    productName: "Hamburger",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde laborum maiores rerum. Hic, illum! Eos labore recusandae possimus, provident, beatae magni in commodi veniam ullam architecto natus hic earum!",
    price: 15,
    stock: 32,
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/OIP.jigwGLJsrpVwqx2qY4EsUAHaE7?w=280&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    productName: "Bread",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde laborum maiores rerum. Hic, illum! Eos labore recusandae possimus, provident, beatae magni in commodi veniam ullam architecto natus hic earum!",
    price: 20,
    stock: 15,
  },
  {
    id: 4,
    image: "https://th.bing.com/th/id/OIP.GgZEIBRxnvyMUPaVo5wl2QHaE8?w=295&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    productName: "Cake",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde laborum maiores rerum. Hic, illum! Eos labore recusandae possimus, provident, beatae magni in commodi veniam ullam architecto natus hic earum!",
    price: 10,
    stock: 19,
  },
];

const initialState = {
  products: initialProducts,
  cart: JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[],
  noti: "",
};

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "DELETE_CART"; payload: number }
  | { type: "UPDATE_CART"; payload: { id: number; quantity: number } }
  | { type: "SET_NOTI"; payload: string };

const cartReducer = (state = initialState, action?: Action) => {
  switch (action?.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const exist = state.cart.find((item) => item.id === product.id);
      if (exist) {
        if (exist.quantity + 1 > product.stock) {
          return { ...state, noti: "Số lượng sản phẩm vượt quá số lượng trong kho" };
        }
        const newCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { ...state, cart: newCart, noti: "Add to cart successfully" };
      } else {
        const newCart = [...state.cart, { ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { ...state, cart: newCart, noti: "Add to cart successfully" };
      }
    }
    case "DELETE_CART": {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart, noti: "Delete cart successfully" };
    }
    case "UPDATE_CART": {
      const { id, quantity } = action.payload;
      const newCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
    case "SET_NOTI":
      return { ...state, noti: action.payload };
    default:
      return state;
  }
};

export default cartReducer;