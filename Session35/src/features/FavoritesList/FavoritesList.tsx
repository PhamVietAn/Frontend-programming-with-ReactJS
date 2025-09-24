import {  useDispatch, useSelector } from "react-redux";
import type {  AppDispatch, RootState } from "../../stores";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { toggleFavorite } from "./FavoritesListSlice";


export default function FavoritesList() {
    const users = useSelector((state: RootState) => state.favorites.users);
    console.log("users",users);
    
    const dispatch: AppDispatch = useDispatch();

   return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "16px",
        maxWidth: "350px",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>List Favorites User</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <p>UserName: {user.name}</p>
          <p
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch(toggleFavorite(user.id))}
          >
            Favorites: {user.favorite ? <HeartFilled /> : <HeartOutlined />}
          </p>
        </div>
      ))}
    </div>
  );
}
