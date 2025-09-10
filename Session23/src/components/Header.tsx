import { NavLink, Outlet } from "react-router-dom";
export default function Header() {
    const style=({isActive}:{isActive:boolean})=>{
        return{
            backgroundColor:isActive?'red':'',
            color:isActive?'white':''
        }
    }
  return (
    <div>
      <nav style={{display:'flex', gap:20}}>
        <NavLink style={style} to="home">Home</NavLink>
        <NavLink style={style} to="about">About</NavLink>
        <NavLink style={style} to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}