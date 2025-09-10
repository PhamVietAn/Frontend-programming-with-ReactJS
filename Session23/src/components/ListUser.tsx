import { useNavigate } from "react-router-dom";
interface User {
    id:number
  userName: string;
  email: string;
  address: string;
}
export default function ListUser() {
  const list: User[] = [
    {
        id:1,
      userName: "Nguyen Van A",
      email: "nva@gmail.com",
      address: "Ha Noi",
    },
    {
        id:2,
      userName: "Nguyen Van B",
      email: "nvb@gmail.com",
      address: "Ha Nam",
    },
    {
        id:3,
      userName: "Nguyen Van C",
      email: "nvc@gmail.com",
      address: "Ninh Binh",
    },
  ];
  const navigate = useNavigate();
  const handleDetail = (user: User) => {
    navigate("/user-detail", { state: { user } });
  };
  return (
    <div style={{display:'flex', gap:30}}>
      {list.map((u) => {
        return (
          <div style={{border:'1px solid black', padding:20}}>
            <p>Id:{u.id}</p>
            <p>UserName:{u.userName}</p>
            <p>Email:{u.email}</p>
            <p>Address:{u.address}</p>
            <button onClick={() => handleDetail(u)}>Xem chi tiet</button>
          </div>
        );
      })}
    </div>
  );
}