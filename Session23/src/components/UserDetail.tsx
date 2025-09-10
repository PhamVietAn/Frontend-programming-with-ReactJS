import { useLocation } from "react-router-dom";
export default function UserDetail() {
  const loaction = useLocation();
  const user = loaction.state?.user;

  return (
    <div style={{border:'1px solid black', padding:20}}>
      <h2>Thong tin chi tiet</h2>
      <p>Id:{user.id}</p>
      <p>UserName:{user.userName}</p>
      <p>Email:{user.email}</p>
      <p>Address:{user.address}</p>
    </div>
  );
}